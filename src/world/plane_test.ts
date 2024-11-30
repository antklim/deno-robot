import { assertEquals } from "@std/assert";
import { isOnPlane, type IsOnPlaneProps } from "./plane.ts";

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

  for (const { props, expected } of testCases) {
    const actual = isOnPlane(props);
    assertEquals(
      actual,
      expected,
      `failed isOnPlane(${JSON.stringify(props)}`,
    );
  }
});
