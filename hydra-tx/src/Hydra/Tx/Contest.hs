module Hydra.Tx.Contest where

import Hydra.Cardano.Api
import Hydra.Prelude

import Hydra.Contract.Head qualified as Head
import Hydra.Contract.HeadState qualified as Head
import Hydra.Data.ContestationPeriod (addContestationPeriod)
import Hydra.Data.Party qualified as OnChain
import Hydra.Ledger.Cardano.Builder (
  addExtraRequiredSigners,
  addInputs,
  addOutputs,
  addReferenceInputs,
  emptyTxBody,
  setValidityUpperBound,
  unsafeBuildTransaction,
 )
import Hydra.Plutus.Orphans ()
import Hydra.Tx.ContestationPeriod (ContestationPeriod, toChain)
import Hydra.Tx.Crypto (MultiSignature (..), toPlutusSignatures)
import Hydra.Tx.HeadId (HeadId, headIdToCurrencySymbol)
import Hydra.Tx.IsTx (hashUTxO)
import Hydra.Tx.ScriptRegistry (ScriptRegistry, headReference)
import Hydra.Tx.Snapshot (Snapshot (..), SnapshotVersion)

import Hydra.Tx.Utils (mkHydraHeadV1TxName)
import PlutusLedgerApi.V3 (toBuiltin)
import PlutusLedgerApi.V3 qualified as Plutus

type PointInTime = (SlotNo, UTCTime)

data ClosedThreadOutput = ClosedThreadOutput
  { closedThreadUTxO :: (TxIn, TxOut CtxUTxO)
  , closedParties :: [OnChain.Party]
  , closedContestationDeadline :: Plutus.POSIXTime
  , closedContesters :: [Plutus.PubKeyHash]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON)

-- XXX: This function is VERY similar to the 'closeTx' function (only notable
-- difference being the redeemer, which is in itself also the same structure as
-- the close's one. We could potentially refactor this to avoid repetition or do
-- something more principled at the protocol level itself and "merge" close and
-- contest as one operation.
contestTx ::
  -- | Published Hydra scripts to reference.
  ScriptRegistry ->
  -- | Party who's authorizing this transaction
  VerificationKey PaymentKey ->
  HeadId ->
  ContestationPeriod ->
  SnapshotVersion ->
  -- | Contested snapshot number (i.e. the one we contest to)
  Snapshot Tx ->
  -- | Multi-signature of the whole snapshot
  MultiSignature (Snapshot Tx) ->
  -- | Current slot and posix time to be used as the contestation time.
  PointInTime ->
  -- | Everything needed to spend the Head state-machine output.
  ClosedThreadOutput ->
  Tx
contestTx scriptRegistry vk headId contestationPeriod openVersion snapshot sig (slotNo, _) closedThreadOutput =
  unsafeBuildTransaction $
    emptyTxBody
      & addInputs [(headInput, headWitness)]
      & addReferenceInputs [headScriptRef]
      & addOutputs [headOutputAfter]
      & addExtraRequiredSigners [verificationKeyHash vk]
      & setValidityUpperBound slotNo
      & setTxMetadata (TxMetadataInEra $ mkHydraHeadV1TxName "ContestTx")
 where
  Snapshot{number, utxo, utxoToCommit, utxoToDecommit} = snapshot

  ClosedThreadOutput
    { closedThreadUTxO = (headInput, headOutputBefore)
    , closedParties
    , closedContestationDeadline
    , closedContesters
    } = closedThreadOutput

  headWitness =
    BuildTxWith $
      ScriptWitness scriptWitnessInCtx $
        mkScriptReference headScriptRef headScript InlineScriptDatum headRedeemer

  headScriptRef =
    fst (headReference scriptRegistry)

  headScript =
    fromPlutusScript @PlutusScriptV3 Head.validatorScript

  contestRedeemer = setContestRedeemer snapshot openVersion sig

  headRedeemer = toScriptData $ Head.Contest contestRedeemer

  headOutputAfter =
    modifyTxOutDatum (const headDatumAfter) headOutputBefore

  contester = toPlutusKeyHash (verificationKeyHash vk)

  onChainConstestationPeriod = toChain contestationPeriod

  newContestationDeadline =
    if length (contester : closedContesters) == length closedParties
      then closedContestationDeadline
      else addContestationPeriod closedContestationDeadline onChainConstestationPeriod

  headDatumAfter =
    mkTxOutDatumInline $
      Head.Closed
        Head.ClosedDatum
          { snapshotNumber = toInteger number
          , utxoHash = toBuiltin $ hashUTxO @Tx utxo
          , alphaUTxOHash =
              case contestRedeemer of
                Head.ContestUsedInc{} ->
                  toBuiltin $ hashUTxO @Tx $ fromMaybe mempty utxoToCommit
                Head.ContestUnusedInc{} ->
                  toBuiltin $ hashUTxO @Tx mempty
                _ -> toBuiltin $ hashUTxO @Tx mempty
          , omegaUTxOHash =
              case contestRedeemer of
                Head.ContestUsedDec{} ->
                  toBuiltin $ hashUTxO @Tx mempty
                Head.ContestUnusedDec{} ->
                  toBuiltin $ hashUTxO @Tx $ fromMaybe mempty utxoToDecommit
                _ -> toBuiltin $ hashUTxO @Tx mempty
          , parties = closedParties
          , contestationDeadline = newContestationDeadline
          , contestationPeriod = onChainConstestationPeriod
          , headId = headIdToCurrencySymbol headId
          , contesters = contester : closedContesters
          , version = toInteger openVersion
          }

setContestRedeemer :: Snapshot Tx -> SnapshotVersion -> MultiSignature (Snapshot Tx) -> Head.ContestRedeemer
setContestRedeemer Snapshot{version, utxoToCommit, utxoToDecommit} openVersion sig =
  if version == openVersion
    then
      if
        | isJust utxoToDecommit ->
            Head.ContestUnusedDec
              { signature = toPlutusSignatures sig
              }
        | isJust utxoToCommit ->
            Head.ContestUnusedInc
              { signature = toPlutusSignatures sig
              , alreadyCommittedUTxOHash = toBuiltin . hashUTxO $ fromMaybe mempty utxoToCommit
              }
        | isNothing utxoToCommit
        , isNothing utxoToDecommit ->
            Head.ContestCurrent
              { signature = toPlutusSignatures sig
              }
        | otherwise -> error "contestTx: unexpected to have both utxo to commit and decommit in the same snapshot."
    else case (isJust utxoToCommit, isJust utxoToDecommit) of
      (True, False) ->
        Head.ContestUsedInc
          { signature = toPlutusSignatures sig
          }
      (False, True) ->
        Head.ContestUsedDec
          { signature = toPlutusSignatures sig
          , alreadyDecommittedUTxOHash = toBuiltin . hashUTxO $ fromMaybe mempty utxoToDecommit
          }
      (False, False) ->
        -- NOTE: here the assumption is: if your snapshot doesn't
        -- contain anything to de/commit then it must mean that we
        -- either already have seen it happen (which would even out the
        -- two versions) or this is a _normal_ snapshot so the version
        -- is not _bumped_ further anyway and it needs to be the same
        -- between snapshot and the open state version.
        error $ "contestTx: both commit and decommit utxo empty but version not the same! snapshot version: " <> show version <> " open version: " <> show openVersion
      (True, True) -> error "contestTx: unexpected to have both utxo to commit and decommit in the same snapshot."
