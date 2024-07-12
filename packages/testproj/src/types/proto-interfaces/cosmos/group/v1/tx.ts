import { Member, MemberSDKType, VoteOption } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}
export const ExecSDKType = Exec;
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: Member[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
  admin: string;
  members: MemberSDKType[];
  metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  groupId: bigint;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
  group_id: bigint;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: Member[];
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
  admin: string;
  group_id: bigint;
  member_updates: MemberSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
  admin: string;
  group_id: bigint;
  new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** metadata is the updated group's metadata. */
  metadata: string;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
  admin: string;
  group_id: bigint;
  metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicySDKType {
  admin: string;
  group_id: bigint;
  metadata: string;
  decision_policy?: AnySDKType;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseSDKType {
  address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the account address of the group policy. */
  address: string;
  /** new_admin is the new group policy admin. */
  newAdmin: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminSDKType {
  admin: string;
  address: string;
  new_admin: string;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: Member[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  groupMetadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  groupPolicyMetadata: string;
  /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
  groupPolicyAsAdmin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy?: Any;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicySDKType {
  admin: string;
  members: MemberSDKType[];
  group_metadata: string;
  group_policy_metadata: string;
  group_policy_as_admin: boolean;
  decision_policy?: AnySDKType;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  /** group_id is the unique ID of the newly created group with policy. */
  groupId: bigint;
  /** group_policy_address is the account address of the newly created group policy. */
  groupPolicyAddress: string;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseSDKType {
  group_id: bigint;
  group_policy_address: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseSDKType {}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the account address of group policy. */
  address: string;
  /** decision_policy is the updated group policy's decision policy. */
  decisionPolicy?: Any;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicySDKType {
  admin: string;
  address: string;
  decision_policy?: AnySDKType;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** address is the account address of group policy. */
  address: string;
  /** metadata is the updated group policy metadata. */
  metadata: string;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataSDKType {
  admin: string;
  address: string;
  metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseSDKType {}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /** address is the account address of group policy. */
  address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalSDKType {
  address: string;
  proposers: string[];
  metadata: string;
  messages: AnySDKType[];
  exec: Exec;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: bigint;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalSDKType {
  proposal_id: bigint;
  address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseSDKType {}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
  metadata: string;
  exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** signer is the account address used to execute the proposal. */
  signer: string;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
  proposal_id: bigint;
  signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupSDKType {
  address: string;
  group_id: bigint;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseSDKType {}