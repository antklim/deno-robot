import { cli } from "../../../deps.ts";
import { Options } from "./Options.ts";

export function parseArgs(args: string[]): Options {
  return cli.parseArgs(args, {
    boolean: ["help"],
    string: ["file"],
    alias: {
      file: ["f"],
      help: ["h"],
    },
    unknown: (arg) => {
      console.error("❗Unknown option:", arg);
      Deno.exit(1);
    },
  });
}
