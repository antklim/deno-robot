import { assert } from "../../deps.ts";
import { State } from "../state/mod.ts";
import { PlaceProps } from "./place.ts";
import { place } from "./place.ts";

const plane = { x: 5, y: 5 };

Deno.test("place outside the plain returns undefined", () => {
  const testCases: Pick<PlaceProps, "dir" | "pos">[] = [
    { pos: { x: 6, y: 6 }, dir: "NORTH" },
    { pos: { x: -6, y: 1 }, dir: "NORTH" },
    { pos: { x: 0, y: -1 }, dir: "NORTH" },
  ];

  for (const t of testCases) {
    const actual = place({ plane, ...t });
    assert.assertEquals(
      actual,
      undefined,
      `failed place(${JSON.stringify(t)}`,
    );
  }
});

Deno.test("place inside the plain returns new state", () => {
  // TODO: load from fixtures
  // TODO: replace with the fuzzy testing
  const testCases: {
    props: Pick<PlaceProps, "dir" | "pos">;
    expected: State;
  }[] = [
    {
      props: { pos: { x: 0, y: 0 }, dir: "NORTH" },
      expected: { pos: { x: 0, y: 0 }, dir: "NORTH" },
    },
    {
      props: { pos: { x: 5, y: 5 }, dir: "NORTH" },
      expected: { pos: { x: 5, y: 5 }, dir: "NORTH" },
    },

    {
      props: { pos: { x: 0, y: 5 }, dir: "NORTH" },
      expected: { pos: { x: 0, y: 5 }, dir: "NORTH" },
    },
    {
      props: { pos: { x: 5, y: 0 }, dir: "NORTH" },
      expected: { pos: { x: 5, y: 0 }, dir: "NORTH" },
    },

    {
      props: { pos: { x: 1, y: 1 }, dir: "SOUTH" },
      expected: { pos: { x: 1, y: 1 }, dir: "SOUTH" },
    },

    {
      props: { pos: { x: 5, y: 5 }, dir: "SOUTH" },
      expected: { pos: { x: 5, y: 5 }, dir: "SOUTH" },
    },

    {
      props: { pos: { x: 1, y: 5 }, dir: "SOUTH" },
      expected: { pos: { x: 1, y: 5 }, dir: "SOUTH" },
    },

    {
      props: { pos: { x: 5, y: 1 }, dir: "SOUTH" },
      expected: { pos: { x: 5, y: 1 }, dir: "SOUTH" },
    },

    {
      props: { pos: { x: 2, y: 2 }, dir: "WEST" },
      expected: { pos: { x: 2, y: 2 }, dir: "WEST" },
    },

    {
      props: { pos: { x: 5, y: 5 }, dir: "WEST" },
      expected: { pos: { x: 5, y: 5 }, dir: "WEST" },
    },

    {
      props: { pos: { x: 2, y: 5 }, dir: "WEST" },
      expected: { pos: { x: 2, y: 5 }, dir: "WEST" },
    },

    {
      props: { pos: { x: 5, y: 2 }, dir: "WEST" },
      expected: { pos: { x: 5, y: 2 }, dir: "WEST" },
    },

    {
      props: { pos: { x: 3, y: 3 }, dir: "EAST" },
      expected: { pos: { x: 3, y: 3 }, dir: "EAST" },
    },

    {
      props: { pos: { x: 4, y: 4 }, dir: "EAST" },
      expected: { pos: { x: 4, y: 4 }, dir: "EAST" },
    },

    {
      props: { pos: { x: 3, y: 4 }, dir: "EAST" },
      expected: { pos: { x: 3, y: 4 }, dir: "EAST" },
    },

    {
      props: { pos: { x: 4, y: 3 }, dir: "EAST" },
      expected: { pos: { x: 4, y: 3 }, dir: "EAST" },
    },
  ];

  for (const t of testCases) {
    const actual = place({ plane, ...t.props });
    assert.assertEquals(
      actual,
      t.expected,
      `failed place(${JSON.stringify(t.props)}`,
    );
  }
});
