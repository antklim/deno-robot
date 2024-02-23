import { Mode } from "./Mode.ts";
import help from "./help.ts";
import file from "./file.ts";
import interactive from "./interactive.ts";
import { Options } from "../args/mod.ts";

export type Runnable = { run: (opts: Options) => void | Promise<void> };

export const modes: Record<Mode, Runnable> = {
  help,
  file,
  interactive,
};
