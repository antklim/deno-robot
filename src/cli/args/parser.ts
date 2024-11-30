import { parseArgs as cliParseArgs } from "@std/cli/parse-args";
import { Options } from "./Options.ts";

export function parseArgs(args: string[]): Options {
  return cliParseArgs(args, {
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
