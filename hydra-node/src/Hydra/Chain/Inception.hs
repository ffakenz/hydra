-- | A Hydra chain module that interacts with yet another hydra-node upstream.
--
-- This allows to open heads in other heads leveraging the isomorphic nature of
-- the Hydra Head protocol.
--
-- Basd on a websocket client to the API of one of the underlying head's nodes.
module Hydra.Chain.Inception where

import Hydra.Prelude

import Cardano.Api.Genesis (shelleyGenesisDefaults)
import Cardano.Api.GenesisParameters (fromShelleyGenesis)
import Cardano.Api.Keys.Class (Key (getVerificationKey))
import Cardano.Api.UTxO qualified as UTxO
import Cardano.Ledger.UTxO qualified as Ledger
import Control.Exception (IOException)
import Control.Monad.Class.MonadThrow (Handler (..), catches)
import Control.Tracer (debugTracer, showTracing)
import Data.Aeson (object, (.=))
import Data.Aeson qualified as Aeson
import Data.Aeson.Types qualified as Aeson
import Data.Text qualified as Text
import Hydra.Cardano.Api (AsType (AsPaymentKey, AsSigningKey), ChainPoint (..), GenesisParameters, LedgerEra, NetworkId (..), NetworkMagic (..), PParams, PaymentKey, ShelleyEra, SigningKey, Tx, UTxO, isVkTxOut, sgSystemStart, toLedgerUTxO)
import Hydra.Cardano.Api.Pretty (renderTx)
import Hydra.Chain (Chain (..), ChainComponent, ChainStateHistory, PostChainTx (..), PostTxError (..))
import Hydra.Chain.Direct.Fixture qualified as Fixture
import Hydra.Chain.Direct.Tx (initTx)
import Hydra.Chain.Direct.Util (readFileTextEnvelopeThrow)
import Hydra.Chain.Direct.Wallet (SomePParams (..), TinyWallet (..), WalletInfoOnChain (..), newTinyWallet)
import Hydra.Ledger (txId)
import Hydra.Network (Host (..))
import Hydra.Options (InceptionChainConfig (..))
import Network.HTTP.Conduit (parseUrlThrow)
import Network.HTTP.Simple (getResponseBody, httpJSON)
import Network.WebSockets (Connection, HandshakeException, runClient, sendClose, sendTextData)
import System.IO (hPutStrLn)
import Text.Pretty.Simple (pHPrint)

-- | Determine the ledger genesis parameters for the head in a head.
-- TODO: Make this configurable like --offline?
getGenesisParameters :: IO (GenesisParameters ShelleyEra)
getGenesisParameters = do
  now <- getCurrentTime
  -- TODO: uses internal cardano-api lib
  pure $ fromShelleyGenesis shelleyGenesisDefaults{sgSystemStart = now}

-- | Start an inception chain component by connecting to the given hydra API
-- endpoint.
-- HACK: Should add tracing
withInceptionChain ::
  InceptionChainConfig ->
  -- | Last known chain state as loaded from persistence.
  ChainStateHistory Tx ->
  ChainComponent Tx IO a
withInceptionChain config chainStateHistory callback action = do
  sk <- readFileTextEnvelopeThrow (AsSigningKey AsPaymentKey) cardanoSigningKey
  pHPrint stderr sk
  wallet <- newHydraWallet networkId sk underlyingHydraApi
  -- TODO: open websocket and callback on SnapshotConfirmed
  withConnectionToNodeHost underlyingHydraApi Nothing $ \client -> do
    action
      Chain
        { postTx = postTx wallet client
        , submitTx = submitTx client
        , draftCommitTx = \_ _ -> pure $ Left FailedToDraftTxNotInitializing
        }
 where
  InceptionChainConfig{underlyingHydraApi, cardanoSigningKey} = config

  -- TODO: configure / fetch from underlying?
  networkId = Testnet (NetworkMagic 42)

  postTx wallet client toPost = do
    hPutStrLn stderr "postTx in Head:"
    pHPrint stderr toPost

    -- TODO: query spendable utxo on demand
    -- TODO: define a timehandle to use (current slot?)
    -- TODO: prepareTxToPost with timehandle, wallet and spendable utxo
    tx <- atomically $ do
      case toPost of
        InitTx{participants, headParameters} ->
          getSeedInput wallet >>= \case
            Just seedInput ->
              pure $ initTx networkId seedInput participants headParameters
            Nothing ->
              error "no seed input"
        _ -> undefined

    -- hPutStrLn stderr $ renderTx tx

    -- TODO: finalizeTx with wallet
    submitTx client tx

  -- HACK: should await success/failure or create a synchronous API
  submitTx client tx = do
    hPutStrLn stderr $ "submitTx " <> show (txId tx)
    send client $ input "NewTx" ["transaction" .= tx]

-- | Create a 'TinyWallet' interface from a connection to the Hydra node.
--
-- HACK: Should find a better "common" denominator for a wallet. Currently the
-- TinyWallet is quite strictly tied to direct chain following semantics.
newHydraWallet :: NetworkId -> SigningKey PaymentKey -> Host -> IO (TinyWallet IO)
newHydraWallet networkId sk host =
  newTinyWallet
    (showTracing debugTracer)
    networkId
    (getVerificationKey sk, sk)
    queryWalletInfo
    queryEpochInfo
    querySomePParams
 where
  queryWalletInfo _queryTip _address = do
    utxo <- getSnapshotUTxO host
    let ownUTxO = UTxO.filter (isVkTxOut $ getVerificationKey sk) utxo
    pure
      WalletInfoOnChain
        { walletUTxO = Ledger.unUTxO $ toLedgerUTxO ownUTxO
        , -- HACK: hard-coded system start
          systemStart = Fixture.systemStart
        , -- HACK: always at genesis
          tip = ChainPointAtGenesis
        }

  -- HACK: hard-coded epoch info
  queryEpochInfo = pure Fixture.epochInfo

  -- HACK: hard-coded pparams
  querySomePParams = pure $ BabbagePParams Fixture.defaultPParams

-- * Hydra client

-- HACK: copied from hydra-cluster HydraNode

-- TODO: This could become a hydra-api or hydra-client package.

-- | Fetch protocol parameters.
getProtocolParameters :: Host -> IO (PParams LedgerEra)
getProtocolParameters host = do
  parseUrlThrow ("GET http://" <> show host <> "/protocol-parameters")
    >>= httpJSON
    <&> getResponseBody

-- | Fetch last confirmed UTxO.
getSnapshotUTxO :: Host -> IO UTxO
getSnapshotUTxO host = do
  parseUrlThrow ("GET http://" <> show host <> "/snapshot/utxo")
    >>= httpJSON
    <&> getResponseBody

data HydraClient = HydraClient
  { apiHost :: Host
  , connection :: Connection
  }

-- | Create an input as expected by 'send'.
input :: Text -> [Aeson.Pair] -> Aeson.Value
input tag pairs = object $ ("tag" .= tag) : pairs

send :: HydraClient -> Aeson.Value -> IO ()
send HydraClient{connection} v = do
  sendTextData connection (Aeson.encode v)

withConnectionToNodeHost :: forall a. Host -> Maybe String -> (HydraClient -> IO a) -> IO a
withConnectionToNodeHost apiHost@Host{hostname, port} queryParams action = do
  connectedOnce <- newIORef False
  tryConnect connectedOnce (200 :: Int)
 where
  tryConnect connectedOnce n
    | n == 0 = error $ "Timed out waiting for connection to hydra-node " <> show apiHost
    | otherwise = do
        let
          retryOrThrow :: forall proxy e. Exception e => proxy e -> e -> IO a
          retryOrThrow _ e =
            readIORef connectedOnce >>= \case
              False -> threadDelay 0.1 >> tryConnect connectedOnce (n - 1)
              True -> throwIO e
        doConnect connectedOnce
          `catches` [ Handler $ retryOrThrow (Proxy @IOException)
                    , Handler $ retryOrThrow (Proxy @HandshakeException)
                    ]

  historyMode = fromMaybe "/" queryParams

  doConnect connectedOnce = runClient (Text.unpack hostname) (fromInteger . toInteger $ port) historyMode $
    \connection -> do
      atomicWriteIORef connectedOnce True
      res <- action $ HydraClient{apiHost, connection}
      sendClose connection ("Bye" :: Text)
      pure res
