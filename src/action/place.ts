import { Direction, Plane, Position, State } from "../state/mod.ts";

const isOutsidePlane = ({ plane, pos }: { plane: Plane; pos: Position }) =>
  pos.x < 0 || pos.x > plane.x || pos.y < 0 || pos.y > plane.y;

export interface PlaceProps {
  plane: Plane;
  pos: Position;
  dir: Direction;
}

export type Place = (props: PlaceProps) => State | undefined;

export const place: Place = ({ plane, pos, dir }) =>
  isOutsidePlane({ plane, pos }) ? undefined : { pos, dir };
