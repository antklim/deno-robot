import { assert } from "../../deps.ts";
import { isOnPlane, type IsOnPlaneProps } from "./mod.ts";

const plane = { x: 5, y: 5 };

Deno.test("isOnPlane", () => {
  const testCases: { props: IsOnPlaneProps; expected: boolean }[] = [
    {
      props: { plane, pos: { x: -1, y: 0 } },
      expected: false,
    },
    {
      props: { plane, pos: { x: 0, y: -10 } },
      expected: false,
    },
    {
      props: { plane, pos: { x: 6, y: 0 } },
      expected: false,
    },
    {
      props: { plane, pos: { x: 1, y: 6 } },
      expected: false,
    },
    {
      props: { plane, pos: { x: 0, y: 0 } },
      expected: true,
    },
    {
      props: { plane, pos: { x: 5, y: 5 } },
      expected: true,
    },
    {
      props: { plane, pos: { x: 1, y: 5 } },
      expected: true,
    },
    {
      props: { plane, pos: { x: 5, y: 1 } },
      expected: true,
    },
  ];

  for (const t of testCases) {
    const actual = isOnPlane(t.props);
    assert.assertEquals(
      actual,
      t.expected,
      `failed isOnPlane(${JSON.stringify(t.props)}`,
    );
  }
});
