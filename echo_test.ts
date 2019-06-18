import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { echo } from "./mod.ts";

test(function shouldEcho(): void {
  const expected = "woop";
  const actual = echo("woop");

  assertEquals(actual, expected);
});

runTests();
