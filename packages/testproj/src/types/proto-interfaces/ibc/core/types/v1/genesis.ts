import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisStateSDKType as GenesisState2SDKType } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisStateSDKType as GenesisState3SDKType } from "../../channel/v1/genesis";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  clientGenesis: GenesisState1;
  /** ICS003 - Connections genesis state */
  connectionGenesis: GenesisState2;
  /** ICS004 - Channel genesis state */
  channelGenesis: GenesisState3;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateSDKType {
  client_genesis: GenesisState1SDKType;
  connection_genesis: GenesisState2SDKType;
  channel_genesis: GenesisState3SDKType;
}