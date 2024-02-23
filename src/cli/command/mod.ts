import { Command } from "./Command.ts";
import { Runnable } from "./Runnable.ts";
import help from "./help.ts";
import left from "./left.ts";
import move from "./move.ts";
import place from "./place.ts";
import quit from "./quit.ts";
import report from "./report.ts";
import right from "./right.ts";

export { type Command } from "./Command.ts";

export const commands: Map<Command, Runnable> = new Map([
  ["help", help],
  ["left", left],
  ["move", move],
  ["place", place],
  ["quit", quit],
  ["report", report],
  ["right", right],
]);
