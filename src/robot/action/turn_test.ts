import { assertEquals } from "@std/assert";
import { RobotState } from "../state.ts";
import { turn } from "./turn.ts";

Deno.test("turns left", () => {
  const pos = { x: 0, y: 0 };

  const testCases: { state: RobotState; expected: RobotState }[] = [
    { state: { pos, dir: "NORTH" }, expected: { pos, dir: "WEST" } },
    { state: { pos, dir: "WEST" }, expected: { pos, dir: "SOUTH" } },
    { state: { pos, dir: "SOUTH" }, expected: { pos, dir: "EAST" } },
    { state: { pos, dir: "EAST" }, expected: { pos, dir: "NORTH" } },
  ];

  for (const { state, expected } of testCases) {
    assertEquals(
      turn({ dir: "LEFT", state }),
      expected,
      `failed turn(${JSON.stringify(state)}`,
    );
  }
});

Deno.test("turns right", () => {
  const pos = { x: 0, y: 0 };

  const testCases: { state: RobotState; expected: RobotState }[] = [
    { state: { pos, dir: "NORTH" }, expected: { pos, dir: "EAST" } },
    { state: { pos, dir: "EAST" }, expected: { pos, dir: "SOUTH" } },
    { state: { pos, dir: "SOUTH" }, expected: { pos, dir: "WEST" } },
    { state: { pos, dir: "WEST" }, expected: { pos, dir: "NORTH" } },
  ];

  for (const { state, expected } of testCases) {
    assertEquals(
      turn({ dir: "RIGHT", state }),
      expected,
      `failed turn(${JSON.stringify(state)}`,
    );
  }
});
