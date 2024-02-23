export interface Position {
  x: number;
  y: number;
}

export const directions = ["NORTH", "EAST", "SOUTH", "WEST"] as const;

export type Direction = typeof directions[number];

export interface State {
  pos: Position;
  dir: Direction;
}
