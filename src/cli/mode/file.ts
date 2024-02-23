import { Options } from "../args/mod.ts";
import { Command, commands } from "../command/mod.ts";
import { parseFileInput } from "../file-input/mod.ts";

const run = async (opts: Options): Promise<void> => {
  const input = await parseFileInput(opts.file!);

  input.forEach(({ command, args }) => {
    commands.get(command as Command)?.run(args);
  });

  Deno.exit(0);
};

export default { run };
