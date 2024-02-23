import { Options, parseArgs } from "./args/mod.ts";
import { Command, commands, usage } from "./command/mod.ts";
import { parseFileInput } from "./file-input/mod.ts";

export async function run() {
  const opts: Options = parseArgs(Deno.args);

  if (opts.help) {
    console.log(
      "🤖 - run me without flags to enter interactive mode or add -f commands.txt to run commands from file",
    );
    Deno.exit(0);
  }

  if (opts.file != null) {
    const input = await parseFileInput(opts.file);

    input.forEach(({ command, args }) => {
      commands.get(command as Command)?.run(args);
    });

    Deno.exit(0);
  }

  console.log(
    "🤖 - Greetings player! Let's play a game! Here is a list of commands I understand:",
  );
  console.log(usage);

  while (true) {
    const input = prompt("Please enter your command or 'quit' to exit:");

    if (input == null) continue;

    const [rawName, args] = input.split(" ");
    const name = rawName.toLowerCase();

    commands.get(name as Command)?.run(args);

    if (!commands.has(name as Command)) {
      console.log(`🤖 - I don't understand: ${name}`);
    }
  }
}
