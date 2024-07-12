import { IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  sendSequences: PacketSequence[];
  recvSequences: PacketSequence[];
  ackSequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */
  nextChannelSequence: bigint;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateSDKType {
  channels: IdentifiedChannelSDKType[];
  acknowledgements: PacketStateSDKType[];
  commitments: PacketStateSDKType[];
  receipts: PacketStateSDKType[];
  send_sequences: PacketSequenceSDKType[];
  recv_sequences: PacketSequenceSDKType[];
  ack_sequences: PacketSequenceSDKType[];
  next_channel_sequence: bigint;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  portId: string;
  channelId: string;
  sequence: bigint;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}