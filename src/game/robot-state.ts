import { Direction, Position } from "../world/mod.ts";

export interface RobotState {
  pos: Position;
  dir: Direction;
}

let state: RobotState | null = null;

export function set(s?: RobotState) {
  if (s == null) return;

  const { pos, dir } = s;

  state = { pos: { ...pos }, dir };
}

export function get(): RobotState | null {
  if (state == null) return null;

  return { pos: { ...state.pos }, dir: state.dir };
}

export function isPlaced() {
  return state != null;
}
