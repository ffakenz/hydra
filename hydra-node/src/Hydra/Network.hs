{-# LANGUAGE UndecidableInstances #-}
{-# OPTIONS_GHC -Wno-orphans #-}

-- | Asynchronous messaging interface to the Hydra Network, e.g to other Hydra nodes.
--
-- Concrete implementations are
-- provided by submodules. Import those instead of this one if interested in
-- actually configuring and running a real network layer.
--
-- Incoming and outgoing messages are modelled as 'Message' data type.
module Hydra.Network (
  module Hydra.Network,
  IP,
  Host (..),
  NodeId (..),
  PortNumber,
  close,
) where

import Hydra.Prelude hiding (show)

import Cardano.Ledger.Orphans ()
import Control.Concurrent.Class.MonadSTM (newTVarIO, readTVarIO, writeTVar)
import Data.IP (IP, toIPv4w)
import Data.Text (pack, unpack)
import Network.Socket (PortNumber, close)
import Network.TypedProtocol.Pipelined ()
import Test.QuickCheck (elements, listOf, suchThat)
import Text.Read (Read (readsPrec))
import Text.Show (Show (show))

deriving anyclass instance ToJSON IP
deriving anyclass instance FromJSON IP

-- * Hydra network interface

-- | New way to structure network components.
data NewNetwork m inmsg outmsg = NewNetwork
  { broadcast :: outmsg -> m ()
  -- ^ Send a message to all everyone on the network.
  , onMessageReceived :: NewCallback m inmsg
  -- ^ Register callback to be called when a message is received.
  }

newNetwork :: MonadSTM m => m (NewNetwork m inmsg outmsg)
newNetwork = do
  onMessageReceived <- newCallback
  pure $
    NewNetwork
      { broadcast = \_ -> pure ()
      , onMessageReceived
      }

newtype NewCallback m a = NewCallback (TVar m (a -> m ()))

newCallback :: MonadSTM m => m (NewCallback m a)
newCallback =
  newCallback' $ \_ -> pure ()

newCallback' :: MonadSTM m => (a -> m ()) -> m (NewCallback m a)
newCallback' cb =
  NewCallback <$> newTVarIO cb

setCallback :: MonadSTM m => NewCallback m a -> (a -> m ()) -> m ()
setCallback (NewCallback tv) cb =
  atomically $ writeTVar tv cb

callback :: MonadSTM m => NewCallback m a -> a -> m ()
callback (NewCallback tv) v = do
  cb <- readTVarIO tv
  cb v

-- | Handle to interface with the hydra network and send messages "off chain".
newtype Network m msg = Network
  { broadcast :: msg -> m ()
  -- ^ Send a `msg` to the whole hydra network.
  }

instance Contravariant (Network m) where
  contramap f (Network bcast) = Network $ \msg -> bcast (f msg)

-- | Handle to interface for inbound messages.
type NetworkCallback msg m = msg -> m ()

-- | A type tying both inbound and outbound messages sending in a single /Component/.
--
-- A `NetworkComponent` can have different inbound and outbound message types.
type NetworkComponent m inbound outbound a = NetworkCallback inbound m -> (Network m outbound -> m a) -> m a

-- * Types used by concrete implementations

-- ** PortNumber (Orphans)

instance ToJSON PortNumber where
  toJSON = toJSON . toInteger

instance FromJSON PortNumber where
  parseJSON = fmap fromInteger . parseJSON

instance Arbitrary PortNumber where
  arbitrary = fromIntegral @Word16 <$> arbitrary

instance ToCBOR PortNumber where
  toCBOR = toCBOR . toInteger

instance FromCBOR PortNumber where
  fromCBOR = fmap fromInteger fromCBOR

newtype NodeId = NodeId {nodeId :: Text}
  deriving newtype (Eq, Show, IsString, Read, Ord, ToJSON, FromJSON)

instance Arbitrary NodeId where
  arbitrary =
    NodeId . pack <$> suchThat (listOf (elements ['a' .. 'z'])) (not . null)

-- return $ NodeId $ pack c

instance FromCBOR NodeId where
  fromCBOR = NodeId <$> fromCBOR

instance ToCBOR NodeId where
  toCBOR NodeId{nodeId} = toCBOR nodeId

-- ** Host

-- REVIEW(SN): This is also used in hydra-tui
data Host = Host
  { hostname :: Text
  , port :: PortNumber
  }
  deriving stock (Ord, Generic, Eq)
  deriving anyclass (ToJSON, FromJSON)

instance Show Host where
  show = showHost

instance Read Host where
  readsPrec _ s = case readHost s of
    Just h -> [(h, "")]
    Nothing -> []

instance Arbitrary Host where
  arbitrary = do
    ip <- toIPv4w <$> arbitrary
    Host (toText $ show ip) <$> arbitrary

instance ToCBOR Host where
  toCBOR Host{hostname, port} =
    mconcat
      [ toCBOR hostname
      , toCBOR port
      ]

instance FromCBOR Host where
  fromCBOR =
    Host
      <$> fromCBOR
      <*> (fromInteger <$> fromCBOR)

showHost :: Host -> String
showHost Host{hostname, port} =
  unpack hostname <> ":" <> show port

readHost :: MonadFail m => String -> m Host
readHost s =
  case break (== ':') s of
    (h, ':' : p) -> Host (pack h) <$> readPort p
    _ -> fail $ "readHost: missing : in " <> s

readPort :: MonadFail m => String -> m PortNumber
readPort s =
  case readMaybe s of
    Nothing -> fail "cannot read port"
    Just n
      | n >= minPort && n <= maxPort -> pure $ fromInteger n
      | otherwise ->
          fail $
            "readPort: "
              <> show n
              <> " not within valid port range: ("
              <> show minPort
              <> ", "
              <> show maxPort
              <> ")"
 where
  maxPort = fromIntegral (maxBound :: Word16)
  minPort = fromIntegral (minBound :: Word16)
