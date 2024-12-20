module Hydra.Tx.Contract.Deposit where

import Hydra.Cardano.Api
import Hydra.Prelude

import Data.Time (UTCTime (..), secondsToDiffTime)
import Data.Time.Calendar (fromGregorian)
import Hydra.Tx (mkHeadId)
import Hydra.Tx.BlueprintTx (CommitBlueprintTx (..))
import Hydra.Tx.Deposit (depositTx)
import Test.Hydra.Tx.Fixture (testNetworkId, testPolicyId)
import Test.Hydra.Tx.Gen (genUTxOAdaOnlyOfSize)

healthyDepositTx :: (Tx, UTxO)
healthyDepositTx =
  (tx, healthyDepositUTxO)
 where
  tx =
    depositTx
      testNetworkId
      (mkHeadId testPolicyId)
      CommitBlueprintTx{blueprintTx = txSpendingUTxO healthyDepositUTxO, lookupUTxO = healthyDepositUTxO}
      depositDeadline

depositDeadline :: UTCTime
depositDeadline = UTCTime (fromGregorian 2024 15 0) (secondsToDiffTime 0)

healthyDepositUTxO :: UTxO
healthyDepositUTxO = genUTxOAdaOnlyOfSize 5 `generateWith` 42
