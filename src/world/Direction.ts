export const directions = ["NORTH", "EAST", "SOUTH", "WEST"] as const;

export type Direction = typeof directions[number];
