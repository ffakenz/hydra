module Main where

import Hydra.Prelude

import Criterion (bench, bgroup, nf, whnf)
import Criterion.Main (defaultMain)
import Data.Aeson (Value (String), object, (.=))
import Data.Aeson qualified as Aeson
import Data.List qualified as List
import Hydra.API.ClientInput (ClientInput (NewTx))
import Hydra.Cardano.Api (
  UTxO,
  serialiseToCBOR,
 )
import Hydra.Chain.Direct.Fixture (defaultGlobals, defaultLedgerEnv)
import Hydra.Ledger (ChainSlot (ChainSlot), Ledger (applyTransactions), ValidationError)
import Hydra.Ledger.Cardano (Tx, cardanoLedger, genFixedSizeSequenceOfSimplePaymentTransactions)
import Test.QuickCheck (generate)

main :: IO ()
main = do
  (utxo, tx) <- prepareTx
  let jsonNewTx = (Aeson.encode . NewTx) tx
      toNewTx bs = object ["tag" .= ("NewTx" :: Text), "transaction" .= String (decodeUtf8 bs)]
      cborNewTx = (Aeson.encode . toNewTx . serialiseToCBOR) tx
  defaultMain
    [ bgroup
        "Cardano Ledger"
        [ bench "Apply Tx" $ whnf benchApplyTxs (utxo, tx)
        , bench "Serialize NewTx (JSON)" $ nf (Aeson.encode . NewTx) tx
        , bench "Serialize NewTx (CBOR)" $ nf serialiseToCBOR tx
        , bench "Deserialize NewTx (JSON)" $ whnf (Aeson.decode @(ClientInput Tx)) jsonNewTx
        , bench "Deserialize NewTx (CBOR-in-JSON)" $ whnf (Aeson.decode @(ClientInput Tx)) cborNewTx
        ]
    , bgroup
        "Packets fragmentation"
        [ bench "Compute AckIds 1" $ whnf benchComputeAckIds frags
        ]
    ]

benchComputeAckIds :: [Word32] -> Int
benchComputeAckIds frags =
  sum $ length . computeAckIds <$> frags

prepareTx :: IO (UTxO, Tx)
prepareTx =
  second List.head <$> generate (genFixedSizeSequenceOfSimplePaymentTransactions 1)

prepareFragments :: IO [Word32]
prepareFragments =
  generate (vectorOf 1000 genFragment)

genFragment :: Gen Word32
genFragment = do
  maxA <- choose (1 :: Word32, 20)
  acks <- vectorOf (fromIntegral maxA) arbitrary
  pure $ maxA .|. mkBits acks
 where
   mkBits :: [Bool] -> Word32
   mkBits acks = foldl' mkBit 0 acks .<<. 12

   mkBit n b =
     if b
     then (n .<<. 1) .|. 1
     else n .<<. 1
benchApplyTxs :: (UTxO, Tx) -> Either (Tx, ValidationError) UTxO
benchApplyTxs (utxo, tx) = applyTransactions defaultLedger (ChainSlot 1) utxo [tx]

defaultLedger :: Ledger Tx
defaultLedger = cardanoLedger defaultGlobals defaultLedgerEnv
