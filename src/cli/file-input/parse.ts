export interface ParseResult {
  command: string;
  args?: string;
}

export async function parseFileInput(fileName: string): Promise<ParseResult[]> {
  const file = await Deno.readTextFile(fileName);

  const lines = file.split("\n");

  return lines.map((line) => {
    const [rawName, args] = line.split(" ");

    return {
      command: rawName.toLowerCase(),
      args,
    };
  });
}
