import { State } from "../state/mod.ts";

let state: State | null = null;

export function set(s?: State) {
  if (s == null) return;

  const { pos, dir } = s;

  state = { pos: { ...pos }, dir };
}

export function get(): State | null {
  if (state == null) return null;

  return { pos: { ...state.pos }, dir: state.dir };
}

export function isPlaced() {
  return state != null;
}
