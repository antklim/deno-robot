import { Direction, Position } from "../world/mod.ts";

export interface State {
  pos: Position;
  dir: Direction;
}

let state: State | null = null;

export function set({ pos, dir }: State) {
  state = { pos: { ...pos }, dir };
}

export function get(): State | null {
  if (state == null) return null;

  return { pos: { ...state.pos }, dir: state.dir };
}

export function isSet() {
  return state != null;
}
