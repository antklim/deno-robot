import { isOnPlane, Plane } from "../plane/mod.ts";
import { Position } from "../state/mod.ts";
import { State } from "../state/mod.ts";

const newPosition = ({ pos: { x, y }, dir }: State): Position => {
  switch (dir) {
    case "NORTH":
      return { x, y: y + 1 };
    case "EAST":
      return { x: x + 1, y };
    case "SOUTH":
      return { x, y: y - 1 };
    case "WEST":
      return { x: x - 1, y };
  }
};

export interface MoveProps {
  plane: Plane;
  state: State;
}

export function move({ plane, state }: MoveProps) {
  const pos = newPosition(state);
  return isOnPlane({ plane, pos }) ? { pos, dir: state.dir } : undefined;
}
