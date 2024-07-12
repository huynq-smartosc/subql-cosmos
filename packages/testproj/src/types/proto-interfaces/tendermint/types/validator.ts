import { PublicKey, PublicKeySDKType } from "../crypto/keys";
export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator;
  totalVotingPower: bigint;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer?: ValidatorSDKType;
  total_voting_power: bigint;
}
export interface Validator {
  address: Uint8Array;
  pubKey: PublicKey;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key: PublicKeySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
export interface SimpleValidator {
  pubKey?: PublicKey;
  votingPower: bigint;
}
export interface SimpleValidatorSDKType {
  pub_key?: PublicKeySDKType;
  voting_power: bigint;
}