import { isOnPlane, Plane } from "../plane/mod.ts";
import { Direction, Position } from "../state/mod.ts";

export interface PlaceProps {
  plane: Plane;
  pos: Position;
  dir: Direction;
}

export function place({ plane, pos, dir }: PlaceProps) {
  return isOnPlane({ plane, pos }) ? { pos, dir } : undefined;
}
