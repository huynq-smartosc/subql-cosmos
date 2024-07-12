import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2Proposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: bigint;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fixMsg: boolean;
}
/**
 * InstantiateContract2Proposal gov proposal content type to instantiate
 * contract 2
 */
export interface InstantiateContract2ProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: bigint;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: bigint;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
  code_id: bigint;
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
  title: string;
  description: string;
  new_admin: string;
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  codeIds: bigint[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  codeIds: bigint[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
  title: string;
  description: string;
  code_ids: bigint[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  codeId: bigint;
  /** InstantiatePermission to apply to the set of code ids */
  instantiatePermission: AccessConfig;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
  code_id: bigint;
  instantiate_permission: AccessConfigSDKType;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  accessConfigUpdates: AccessConfigUpdate[];
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposalSDKType {
  title: string;
  description: string;
  access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
/**
 * StoreAndInstantiateContractProposal gov proposal content type to store
 * and instantiate the contract.
 */
export interface StoreAndInstantiateContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  admin: string;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  source: string;
  builder: string;
  code_hash: Uint8Array;
}