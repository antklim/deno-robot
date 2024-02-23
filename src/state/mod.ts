export interface Position {
  x: number;
  y: number;
}

export type Direction = "NORTH" | "SOUTH" | "WEST" | "EAST";

export interface State {
  pos: Position;
  dir: Direction;
}
