import { action, get, isPlaced, set, TurnDirection } from "../../robot/mod.ts";
import { Runnable } from "./Runnable.ts";

const turn = (dir: TurnDirection): Runnable => ({
  run: () => {
    if (!isPlaced()) return;

    const newState = action({
      type: "TURN",
      props: {
        dir,
        state: get()!,
      },
    });

    set(newState);
  },
});

export default turn;
