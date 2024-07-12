/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */
  annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  inflation: string;
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** maximum annual change in inflation rate */
  inflationRateChange: string;
  /** maximum inflation rate */
  inflationMax: string;
  /** minimum inflation rate */
  inflationMin: string;
  /** goal of percent bonded atoms */
  goalBonded: string;
  /** expected blocks per year */
  blocksPerYear: bigint;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  blocks_per_year: bigint;
}