import { assert } from "../../deps.ts";
import { RobotState } from "../game/mod.ts";
import { move } from "./move.ts";

const plane = { x: 5, y: 5 };

Deno.test("move off the plane returns undefined", () => {
  const testCases: RobotState[] = [
    { pos: { x: 0, y: 0 }, dir: "WEST" },
    { pos: { x: 0, y: 0 }, dir: "SOUTH" },
    { pos: { x: 5, y: 5 }, dir: "EAST" },
    { pos: { x: 5, y: 5 }, dir: "NORTH" },
  ];

  for (const t of testCases) {
    assert.assertEquals(
      move({ plane, state: t }),
      undefined,
      `failed move(${JSON.stringify(t)}`,
    );
  }
});

Deno.test("move on the plane returns a new state", () => {
  const testCases: { state: RobotState; expected: RobotState }[] = [
    {
      state: { pos: { x: 0, y: 0 }, dir: "EAST" },
      expected: { pos: { x: 1, y: 0 }, dir: "EAST" },
    },
    {
      state: { pos: { x: 0, y: 0 }, dir: "NORTH" },
      expected: { pos: { x: 0, y: 1 }, dir: "NORTH" },
    },
    {
      state: { pos: { x: 5, y: 5 }, dir: "WEST" },
      expected: { pos: { x: 4, y: 5 }, dir: "WEST" },
    },
    {
      state: { pos: { x: 5, y: 5 }, dir: "SOUTH" },
      expected: { pos: { x: 5, y: 4 }, dir: "SOUTH" },
    },
  ];

  for (const { state, expected } of testCases) {
    assert.assertEquals(
      move({ plane, state }),
      expected,
      `failed move(${JSON.stringify(state)}`,
    );
  }
});
