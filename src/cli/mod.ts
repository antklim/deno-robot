import { Options, parseArgs } from "./args/mod.ts";
import { modes, Runnable } from "./mode/mod.ts";

export async function run() {
  const opts: Options = parseArgs(Deno.args);

  const command: Runnable = opts.help
    ? modes.help
    : opts.file != null
    ? modes.file
    : modes.interactive;

  await command.run(opts);
}
