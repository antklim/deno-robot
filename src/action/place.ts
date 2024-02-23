import { isOnPlane, Plane } from "../plane/mod.ts";
import { Direction, Position, State } from "../state/mod.ts";

export interface PlaceProps {
  plane: Plane;
  pos: Position;
  dir: Direction;
}

export type Place = (props: PlaceProps) => State | undefined;

export const place: Place = ({ plane, pos, dir }) =>
  isOnPlane({ plane, pos }) ? { pos, dir } : undefined;
