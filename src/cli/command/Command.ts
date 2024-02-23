export const commands = [
  "place",
  "left",
  "right",
  "move",
  "report",
  "help",
  "quit",
] as const;

export type Command = typeof commands[number];
