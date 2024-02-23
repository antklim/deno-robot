import { State } from "../state/mod.ts";
import { directions } from "../world/mod.ts";

export type TurnDirection = "LEFT" | "RIGHT";

export interface TurnProps {
  dir: TurnDirection;
  state: State;
}

export function turn({ dir, state }: TurnProps): State {
  let dirIdx = directions.indexOf(state.dir);
  dirIdx = dir === "LEFT" ? dirIdx - 1 : dirIdx + 1;

  const nextDir = directions[(dirIdx + directions.length) % directions.length];

  return { ...state, dir: nextDir };
}
