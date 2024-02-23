import { move, MoveProps } from "./move.ts";
import { place, PlaceProps } from "./place.ts";
import { turn, TurnProps } from "./turn.ts";

export type Action =
  | {
    type: "PLACE";
    props: PlaceProps;
  }
  | {
    type: "MOVE";
    props: MoveProps;
  }
  | {
    type: "TURN";
    props: TurnProps;
  };

export function action(action: Action) {
  switch (action.type) {
    case "PLACE":
      return place(action.props);
    case "MOVE":
      return move(action.props);
    case "TURN":
      return turn(action.props);
  }
}
