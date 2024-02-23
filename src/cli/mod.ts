import { usage } from "./command/help.ts";
import help from "./command/help.ts";
import quit from "./command/quit.ts";

export function run() {
  console.log(
    "🤖 - Greetings stranger! Let's play a game! Here is a list of commands I understand:",
  );
  console.log(usage);

  while (true) {
    const command = prompt("Please enter your command or 'quit' to exit:");

    if (command === "quit") {
      quit.run();
    }

    if (command === "help") {
      help.run();
    }
  }
}
