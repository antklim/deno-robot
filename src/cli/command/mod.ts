import { Command } from "./Command.ts";
import { Runnable } from "./Runnable.ts";
import help from "./help.ts";
import move from "./move.ts";
import place from "./place.ts";
import quit from "./quit.ts";
import report from "./report.ts";
import turn from "./turn.ts";

export { usage } from "./help.ts";
export { type Command } from "./Command.ts";

export const commands: Map<Command, Runnable> = new Map([
  ["help", help],
  ["left", turn("LEFT")],
  ["move", move],
  ["place", place],
  ["quit", quit],
  ["report", report],
  ["right", turn("RIGHT")],
]);
