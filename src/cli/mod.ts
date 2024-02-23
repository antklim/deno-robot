import { Command, commands, usage } from "./command/mod.ts";

export function run() {
  console.log(
    "🤖 - Greetings player! Let's play a game! Here is a list of commands I understand:",
  );
  console.log(usage);

  while (true) {
    const input = prompt("Please enter your command or 'quit' to exit:");

    if (input == null) continue;

    const [name, args] = input.split(" ");

    commands.get(name as Command)?.run(args);

    if (!commands.has(name as Command)) {
      console.log(`🤖 - I don't understand: ${name}`);
    }
  }
}
