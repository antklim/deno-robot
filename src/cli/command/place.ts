import { RobotState, set } from "../../robot/mod.ts";
import { Direction, directions, planeX, planeY } from "../../world/mod.ts";
import { action } from "../../action/mod.ts";

const validate = (
  args: string,
): RobotState | Error => {
  const [xS, yS, direction] = args.split(",");

  const x = parseInt(xS);
  const y = parseInt(yS);

  if (isNaN(x)) return new Error("Invalid x coordinate");
  if (isNaN(y)) return new Error("Invalid y coordinate");

  if (directions.indexOf(direction as Direction) === -1) {
    return new Error("Invalid direction");
  }

  return { pos: { x, y }, dir: direction as Direction };
};

const run = (args?: string) => {
  if (args == null) return;

  const state = validate(args);

  if (state instanceof Error) {
    console.log(`🤖 - oh nooo: ${state.message}`);
    return;
  }

  const newState = action({
    type: "PLACE",
    props: {
      plane: { x: planeX, y: planeY },
      ...state,
    },
  });

  set(newState);
};

export default { run };
