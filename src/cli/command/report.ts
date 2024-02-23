import { get, isPlaced } from "../../robot/mod.ts";

const run = () => {
  if (isPlaced()) {
    const { pos: { x, y }, dir } = get()!;
    console.log(`🤖 - I'm at: ${x},${y},${dir}\n`);
  } else {
    console.log(`🤖 - I'm not on the table\n`);
  }
};

export default { run };
