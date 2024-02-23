import { Position } from "./Position.ts";

export interface Plane {
  x: number;
  y: number;
}

export interface IsOnPlaneProps {
  plane: Plane;
  pos: Position;
}

export function isOnPlane(
  { plane, pos }: IsOnPlaneProps,
) {
  return pos.x >= 0 && pos.x <= plane.x && pos.y >= 0 && pos.y <= plane.y;
}
