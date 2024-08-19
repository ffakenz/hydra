{-# LANGUAGE TemplateHaskell #-}
{-# OPTIONS_GHC -fno-specialize #-}
{-# OPTIONS_GHC -fplugin-opt PlutusTx.Plugin:conservative-optimisation #-}
{-# OPTIONS_GHC -fplugin-opt PlutusTx.Plugin:defer-errors #-}
-- Plutus core version to compile to. In babbage era, that is Cardano protocol
-- version 7 and 8, only plutus-core version 1.0.0 is available.
{-# OPTIONS_GHC -fplugin-opt PlutusTx.Plugin:target-version=1.0.0 #-}

-- | The validator used to deposit funds
module Hydra.Contract.Deposit where

import PlutusTx.Prelude

import Hydra.Cardano.Api (PlutusScriptVersion (PlutusScriptV2))
import Hydra.Plutus.Extras (ValidatorType, scriptValidatorHash, wrapValidator)
import PlutusLedgerApi.V2 (
  CurrencySymbol,
  Datum (Datum),
  POSIXTimeRange,
  Redeemer (Redeemer),
  ScriptContext,
  ScriptHash,
  SerialisedScript,
  TxOutRef,
  serialiseCompiledCode,
 )
import PlutusTx (CompiledCode, toBuiltinData)
import PlutusTx qualified
import Prelude qualified as Haskell

data DepositRedeemer
  = -- | Claims already deposited funds.
    Claim
  | -- | Cancels deposit.
    Cancel

PlutusTx.unstableMakeIsData ''DepositRedeemer

-- | A data type representing deposited outputs on-chain. Besides recording the
-- original 'TxOutRef', it also stores a binary representation compatible
-- between on-chain and off-chain code to be hashed in the validators.
data Deposit = Deposit
  { input :: TxOutRef
  , preSerializedOutput :: BuiltinByteString
  }
  deriving stock (Haskell.Eq, Haskell.Show, Haskell.Ord)

PlutusTx.unstableMakeIsData ''Deposit

instance Eq Deposit where
  (Deposit i o) == (Deposit i' o') =
    i == i' && o == o'

type DepositDatum = (CurrencySymbol, POSIXTimeRange, [Deposit])

validator :: DepositDatum -> DepositRedeemer -> ScriptContext -> Bool
validator (_headId, _dl, _deposit) r _ctx =
  case r of
    Claim -> True
    Cancel -> True

compiledValidator :: CompiledCode ValidatorType
compiledValidator =
  $$(PlutusTx.compile [||wrap validator||])
 where
  wrap = wrapValidator @DepositDatum @DepositRedeemer

validatorScript :: SerialisedScript
validatorScript = serialiseCompiledCode compiledValidator

validatorHash :: ScriptHash
validatorHash = scriptValidatorHash PlutusScriptV2 validatorScript

datum :: DepositDatum -> Datum
datum a = Datum (toBuiltinData a)

redeemer :: DepositRedeemer -> Redeemer
redeemer a = Redeemer (toBuiltinData a)
