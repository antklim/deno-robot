import { action } from "../../action/mod.ts";
import { get, isPlaced, planeX, planeY, set } from "../../game/mod.ts";

const run = () => {
  if (!isPlaced()) return;

  const newState = action({
    type: "MOVE",
    props: { state: get()!, plane: { x: planeX, y: planeY } },
  });

  set(newState);
};

export default { run };
