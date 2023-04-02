{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE UndecidableInstances #-}

module Hydra.API.Server (
  Server (..),
  ServerCallback,
  ServerComponent,
  withAPIServer,
  APIServerLog,
) where

import Hydra.Prelude hiding (TVar, readTVar, seq)

import Control.Concurrent.STM (TChan, dupTChan, readTChan)
import qualified Control.Concurrent.STM as STM
import Control.Concurrent.STM.TChan (newBroadcastTChanIO, writeTChan)
import Control.Concurrent.STM.TVar (TVar, modifyTVar', newTVarIO, readTVar)
import Control.Exception (IOException)
import qualified Data.Aeson as Aeson
import Hydra.API.Host (ipToHostPreference)
import Hydra.API.ClientInput (ClientInput)
import Hydra.API.ServerOutput (
  OutputFormat (..),
  ServerOutput (Greetings, InvalidInput),
  TimedServerOutput (..),
  prepareServerOutput,
 )
import Hydra.Chain (IsChainState)
import Hydra.Logging (Tracer, traceWith)
import Hydra.Network (IP)
import Hydra.Party (Party)
import Hydra.Persistence (PersistenceIncremental (..))
import Network.WebSockets (
  PendingConnection (pendingRequest),
  RequestHead (..),
  acceptRequest,
  receiveData,
  sendTextData,
  sendTextDatas,
  withPingThread, defaultConnectionOptions, ConnectionException (..), sendClose, fromLazyByteString
 )
import Network.HTTP.Types (status400)
import Network.Wai.Handler.WebSockets (websocketsOr)
import Network.Wai (responseLBS)
import Network.Wai.Handler.Warp (runSettings, defaultSettings, setHost, setPort, Port)
import Test.QuickCheck (oneof)
import Text.URI hiding (ParseException)
import Text.URI.QQ (queryKey, queryValue)

data APIServerLog
  = APIServerStarted {listeningPort :: Port}
  | NewAPIConnection
  | APIOutputSent {sentOutput :: Aeson.Value}
  | APIInputReceived {receivedInput :: Aeson.Value}
  | APIInvalidInput {reason :: String, inputReceived :: Text}
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON)

instance Arbitrary APIServerLog where
  arbitrary =
    oneof
      [ APIServerStarted <$> arbitrary
      , pure NewAPIConnection
      , pure $ APIOutputSent (Aeson.Object mempty)
      , pure $ APIInputReceived (Aeson.Object mempty)
      , APIInvalidInput <$> arbitrary <*> arbitrary
      ]

-- | Handle to provide a means for sending server outputs to clients.
newtype Server tx m = Server
  { -- | Send some output to all connected clients.
    sendOutput :: ServerOutput tx -> m ()
  }

-- | Callback for receiving client inputs.
type ServerCallback tx m = ClientInput tx -> m ()

-- | A type tying both receiving input and sending output into a /Component/.
type ServerComponent tx m a = ServerCallback tx m -> (Server tx m -> m a) -> m a

withAPIServer ::
  forall tx.
  (IsChainState tx) =>
  IP ->
  Port ->
  Party ->
  PersistenceIncremental (TimedServerOutput tx) IO ->
  Tracer IO APIServerLog ->
  ServerComponent tx IO ()
withAPIServer host port party PersistenceIncremental{loadAll, append} tracer callback action = do
  responseChannel <- newBroadcastTChanIO
  h <- loadAll
  -- NOTE: we need to reverse the list because we store history in a reversed
  -- list in memory but in order on disk
  history <- newTVarIO (reverse h)

  -- NOTE: We will add a 'Greetings' message on each API server start. This is
  -- important to make sure the latest configured 'party' is reaching the
  -- client.
  void $ appendToHistory history (Greetings party)
  race_
    (runAPIServer host port party tracer history callback responseChannel)
    . action
    $ Server
      { sendOutput = \output -> do
          timedOutput <- appendToHistory history output
          atomically $
            writeTChan responseChannel timedOutput
      }
 where
  appendToHistory :: TVar [TimedServerOutput tx] -> ServerOutput tx -> IO (TimedServerOutput tx)
  appendToHistory history output = do
    time <- getCurrentTime
    timedOutput <- atomically $ do
      seq <- nextSequenceNumber <$> readTVar history
      let timedOutput = TimedServerOutput{output, time, seq}
      modifyTVar' history (timedOutput :)
      pure timedOutput
    append timedOutput
    pure timedOutput

nextSequenceNumber :: [TimedServerOutput tx] -> Natural
nextSequenceNumber historyList =
  case historyList of
    [] -> 0
    (TimedServerOutput{seq} : _) -> seq + 1

runAPIServer ::
  forall tx.
  (IsChainState tx) =>
  IP ->
  Port ->
  Party ->
  Tracer IO APIServerLog ->
  TVar [TimedServerOutput tx] ->
  (ClientInput tx -> IO ()) ->
  TChan (TimedServerOutput tx) ->
  IO ()
runAPIServer host port party tracer history callback responseChannel = do
  traceWith tracer (APIServerStarted port)
  handle onIOException $
    let serverSettings = setHost (ipToHostPreference host) $ setPort port $ defaultSettings
    in runSettings serverSettings $ websocketsOr defaultConnectionOptions wsApp httpApp
 where
  wsApp pending = do
    let path = requestPath $ pendingRequest pending
    queryParams <- uriQuery <$> mkURIBs path
    con <- acceptRequest pending
    chan <- STM.atomically $ dupTChan responseChannel
    traceWith tracer NewAPIConnection

    -- api client can decide if they want to see the past history of server outputs
    if shouldNotServeHistory queryParams
      then forwardGreetingOnly con
      else forwardHistory con

    -- api client can decide if they want tx's to be displayed as CBOR instead of plain json
    let txDisplay = decideOnTxDisplay queryParams

    withPingThread con 30 (pure ()) $
      race_ (receiveInputs con) (sendOutputs chan con txDisplay)
        `catch` onServerException con

  httpApp _ respond =
    respond $ responseLBS status400 [] "Currently Hydra supports only WebSocket requests."

  forwardGreetingOnly con = do
    time <- getCurrentTime
    sendTextData con $
      Aeson.encode
        TimedServerOutput
          { time
          , seq = 0
          , output = Greetings party :: ServerOutput tx
          }
  decideOnTxDisplay qp =
    let k = [queryKey|tx-output|]
        v = [queryValue|cbor|]
        queryP = QueryParam k v
     in case queryP `elem` qp of
          True -> OutputCBOR
          False -> OutputJSON

  shouldNotServeHistory qp =
    flip any qp $ \case
      (QueryParam key val)
        | key == [queryKey|history|] -> val == [queryValue|no|]
      _other -> False

  onIOException ioException =
    throwIO $
      RunServerException
        { ioException
        , host
        , port
        }
  onServerException con exc =
    case exc of
      -- ignoring 'ConnectionClosed' exceptions since they appear when client
      -- doesn't send 'Close' meaning it doesn't close the connection cleanly
      ConnectionClosed -> return ()
      -- on 'CloseRequest' properly close connection
      CloseRequest _ _ ->
        sendClose con
          (Aeson.encode . Aeson.String $ fromLazyByteString "Client closed connection")
      pe@(ParseException e) -> do
        traceWith tracer (APIInvalidInput e "")
        throwIO pe
      ue@(UnicodeException e) -> do
        traceWith tracer (APIInvalidInput e "")
        throwIO ue
  sendOutputs chan con txDisplay = forever $ do
    response <- STM.atomically $ readTChan chan
    let sentResponse =
          prepareServerOutput txDisplay response

    sendTextData con sentResponse
    traceWith tracer (APIOutputSent $ toJSON response)

  receiveInputs con = forever $ do
    msg <- receiveData con
    case Aeson.eitherDecode msg of
      Right input -> do
        traceWith tracer (APIInputReceived $ toJSON input)
        callback input
      Left e -> do
        -- XXX(AB): toStrict might be problematic as it implies consuming the full
        -- message to memory
        let clientInput = decodeUtf8With lenientDecode $ toStrict msg
        time <- getCurrentTime
        seq <- atomically $ nextSequenceNumber <$> readTVar history
        let timedOutput = TimedServerOutput{output = InvalidInput @tx e clientInput, time, seq}
        sendTextData con $ Aeson.encode timedOutput
        traceWith tracer (APIInvalidInput e clientInput)

  forwardHistory con = do
    hist <- STM.atomically (readTVar history)
    let encodeAndReverse xs serverOutput = Aeson.encode serverOutput : xs
    sendTextDatas con $ foldl' encodeAndReverse [] hist

data RunServerException = RunServerException
  { ioException :: IOException
  , host :: IP
  , port :: Port
  }
  deriving (Show)

instance Exception RunServerException
