/**
 * 해당 파일은 deno로 실행 합니다.
 * deno test ${파일명}
 */
import { assertEquals } from "https://deno.land/std@0.221.0/assert/mod.ts";
import * as fn from "./functional_programming_exercise.js";

function getRandomUpperCaseLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

const users = Array.from(Array(20)).map((_, i) => ({
  id: i + 1,
  name: getRandomUpperCaseLetter() + getRandomUpperCaseLetter(),
  age: 20 + i
}));

// fn._filter()
Deno.test("init", () => {
  const result = fn.sample();
  assertEquals(result, "test");
});
