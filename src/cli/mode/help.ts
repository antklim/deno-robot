const run = (): void => {
  console.log(
    "🤖 - run me without flags to enter interactive mode or add -f commands.txt to run commands from file",
  );
  Deno.exit(0);
};

export default { run };
