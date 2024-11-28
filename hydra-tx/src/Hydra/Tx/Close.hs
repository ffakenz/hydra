{-# LANGUAGE DuplicateRecordFields #-}

module Hydra.Tx.Close where

import Hydra.Cardano.Api
import Hydra.Prelude

import Hydra.Contract.Head qualified as Head
import Hydra.Contract.HeadState qualified as Head
import Hydra.Data.ContestationPeriod (addContestationPeriod)
import Hydra.Data.ContestationPeriod qualified as OnChain
import Hydra.Data.Party qualified as OnChain
import Hydra.Ledger.Cardano.Builder (
  addExtraRequiredSigners,
  addInputs,
  addOutputs,
  addReferenceInputs,
  emptyTxBody,
  setValidityLowerBound,
  setValidityUpperBound,
  unsafeBuildTransaction,
 )
import Hydra.Plutus.Extras.Time (posixFromUTCTime)
import Hydra.Tx (
  ConfirmedSnapshot (..),
  HeadId,
  ScriptRegistry (headReference),
  Snapshot (..),
  SnapshotVersion,
  getSnapshot,
  hashUTxO,
  headIdToCurrencySymbol,
  headReference,
 )
import Hydra.Tx.Contest (PointInTime)
import Hydra.Tx.Crypto (toPlutusSignatures)
import Hydra.Tx.Utils (mkHydraHeadV1TxName)
import PlutusLedgerApi.V3 (toBuiltin)

-- | Representation of the Head output after a CollectCom transaction.
data OpenThreadOutput = OpenThreadOutput
  { openThreadUTxO :: (TxIn, TxOut CtxUTxO)
  , openContestationPeriod :: OnChain.ContestationPeriod
  , openParties :: [OnChain.Party]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON)

-- | Create a transaction closing a head with either the initial snapshot or
-- with a multi-signed confirmed snapshot.
closeTx ::
  -- | Published Hydra scripts to reference.
  ScriptRegistry ->
  -- | Party who's authorizing this transaction
  VerificationKey PaymentKey ->
  -- | Head identifier
  HeadId ->
  -- | Last known version of the open head.
  SnapshotVersion ->
  -- | Snapshot with instructions how to close the head.
  ConfirmedSnapshot Tx ->
  -- | Lower validity slot number, usually a current or quite recent slot number.
  SlotNo ->
  -- | Upper validity slot and UTC time to compute the contestation deadline time.
  PointInTime ->
  -- | Everything needed to spend the Head state-machine output.
  OpenThreadOutput ->
  Tx
closeTx scriptRegistry vk headId openVersion confirmedSnapshot startSlotNo (endSlotNo, utcTime) openThreadOutput =
  unsafeBuildTransaction $
    emptyTxBody
      & addInputs [(headInput, headWitness)]
      & addReferenceInputs [headScriptRef]
      & addOutputs [headOutputAfter]
      & addExtraRequiredSigners [verificationKeyHash vk]
      & setValidityLowerBound startSlotNo
      & setValidityUpperBound endSlotNo
      & setTxMetadata (TxMetadataInEra $ mkHydraHeadV1TxName "CloseTx")
 where
  OpenThreadOutput
    { openThreadUTxO = (headInput, headOutputBefore)
    , openContestationPeriod
    , openParties
    } = openThreadOutput

  headWitness =
    BuildTxWith $
      ScriptWitness scriptWitnessInCtx $
        mkScriptReference headScriptRef headScript InlineScriptDatum headRedeemer

  headScriptRef =
    fst (headReference scriptRegistry)

  headScript =
    fromPlutusScript @PlutusScriptV3 Head.validatorScript

  headRedeemer = toScriptData $ Head.Close closeRedeemer

  closeRedeemer =
    case confirmedSnapshot of
      InitialSnapshot{} -> Head.CloseInitial
      ConfirmedSnapshot{signatures, snapshot = Snapshot{version, utxoToCommit, utxoToDecommit}} ->
        if version == openVersion
          then
            if
              | isJust utxoToCommit ->
                  Head.CloseUnusedInc
                    { signature = toPlutusSignatures signatures
                    , alreadyCommittedUTxOHash = toBuiltin . hashUTxO $ fromMaybe mempty utxoToCommit
                    }
              | isJust utxoToDecommit ->
                  Head.CloseUnusedDec{signature = toPlutusSignatures signatures}
              | isNothing utxoToCommit
              , isNothing utxoToDecommit ->
                  Head.CloseAny{signature = toPlutusSignatures signatures}
              | otherwise -> error "closeTx: unexpected to have both utxo to commit and decommit in the same snapshot."
          else
            -- NOTE: This will only work for version == openVersion - 1
            case (isJust utxoToCommit, isJust utxoToDecommit) of
              (True, False) ->
                Head.CloseUsedInc
                  { signature = toPlutusSignatures signatures
                  , alreadyCommittedUTxOHash = toBuiltin . hashUTxO $ fromMaybe mempty utxoToCommit
                  }
              (False, True) ->
                Head.CloseUsedDec
                  { signature = toPlutusSignatures signatures
                  , alreadyDecommittedUTxOHash = toBuiltin . hashUTxO $ fromMaybe mempty utxoToDecommit
                  }
              (False, False) ->
                -- NOTE: here the assumption is: if your snapshot doesn't
                -- contain anything to de/commit then it must mean that we
                -- either already have seen it happen (which would even out the
                -- two versions) or this is a _normal_ snapshot so the version
                -- is not _bumped_ further anyway and it needs to be the same
                -- between snapshot and the open state version.
                error $ "closeTx: both commit and decommit utxo empty but version not matching! snapshot version: " <> show version <> " open version: " <> show openVersion
              -- TODO: can we get rid of these errors by modelling what we expect differently?
              (True, True) -> error "closeTx: unexpected to have both utxo to commit and decommit in the same snapshot."

  headOutputAfter =
    modifyTxOutDatum (const headDatumAfter) headOutputBefore

  headDatumAfter =
    mkTxOutDatumInline $
      Head.Closed
        Head.ClosedDatum
          { snapshotNumber =
              fromIntegral . number $ getSnapshot confirmedSnapshot
          , utxoHash =
              toBuiltin . hashUTxO $ utxo (getSnapshot confirmedSnapshot)
          , alphaUTxOHash =
              case closeRedeemer of
                Head.CloseUsedInc{} ->
                  toBuiltin . hashUTxO @Tx . fromMaybe mempty . utxoToCommit $ getSnapshot confirmedSnapshot
                Head.CloseUnusedInc{} ->
                  toBuiltin $ hashUTxO @Tx mempty
                _ -> toBuiltin $ hashUTxO @Tx mempty
          , omegaUTxOHash =
              case closeRedeemer of
                Head.CloseUsedDec{} ->
                  toBuiltin $ hashUTxO @Tx mempty
                Head.CloseUnusedDec{} ->
                  toBuiltin . hashUTxO @Tx . fromMaybe mempty . utxoToDecommit $ getSnapshot confirmedSnapshot
                _ -> toBuiltin $ hashUTxO @Tx mempty
          , parties = openParties
          , contestationDeadline
          , contestationPeriod = openContestationPeriod
          , headId = headIdToCurrencySymbol headId
          , contesters = []
          , version = fromIntegral openVersion
          }

  contestationDeadline =
    addContestationPeriod (posixFromUTCTime utcTime) openContestationPeriod
