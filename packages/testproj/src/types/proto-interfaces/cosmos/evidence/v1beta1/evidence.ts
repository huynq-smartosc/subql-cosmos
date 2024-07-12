/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: bigint;
  time: Date;
  power: bigint;
  consensusAddress: string;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
  height: bigint;
  time: Date;
  power: bigint;
  consensus_address: string;
}