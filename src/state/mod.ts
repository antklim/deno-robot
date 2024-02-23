import { Direction, Position } from "../world/mod.ts";

export interface State {
  pos: Position;
  dir: Direction;
}
