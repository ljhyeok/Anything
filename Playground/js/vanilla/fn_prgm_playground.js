/**
 * 해당 파일은 deno로 실행 합니다.
 * deno test ${파일명}
 */
import { assertEquals } from "https://deno.land/std@0.221.0/assert/mod.ts";
import * as fn from "./functional_programming_exercise.js";

// function getRandomUpperCaseLetter() {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const randomIndex = Math.floor(Math.random() * alphabet.length);
//   return alphabet[randomIndex];
// }

// const users = Array.from(Array(20)).map((_, i) => ({
//   id: i + 1,
//   name: getRandomUpperCaseLetter() + getRandomUpperCaseLetter(),
//   age: 20 + i
// }));

// fn._filter()
// Deno.test("init", () => {
//   const result = fn.sample();
//   assertEquals(result, "test");
// });

// fn._each(
//   [1, 2, 3, 4, 5],
//   num => console.log(num)
// )


// 3이상 수를 모두 합해서 출력하는 함수
// var _addOver3AndConsole = fn._pipe(
//   fn._curryr(fn._filter)(num => num < 3),
//   fn._curryr(fn._reduce)((acc, cur) => acc + cur),
//   console.log
// )

// _addOver3AndConsole([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// var test = fn._curryr(fn._filter)(num => num >= 3);
// console.log(test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// fn._go(
//   [1, 2, 3, 4, 5],
//   fn._curryr(fn._filter)(num => num > 3),
//   fn._curryr(fn._reduce)((acc, cur) => acc + cur),
//   console.log
// )

var users = [
  { id: 10, name: 'ID', age: 36 },
  { id: 20, name: 'BJ', age: 32 },
  { id: 30, name: 'JM', age: 32 },
  { id: 40, name: 'PJ', age: 27 },
  { id: 50, name: 'HA', age: 25 },
  { id: 60, name: 'JE', age: 26 },
  { id: 70, name: 'JI', age: 31 },
  { id: 80, name: 'MP', age: 23 },
  { id: 90, name: 'FP', age: 13 }
];

// console.log(
//   fn._pluck(users, "name")
// );

// fn._go(
//   users,
//   fn._reject(user => user.age <= 30),
//   console.log
// )

// console.log(fn._find(users, user => user.age < 30));

// fn._go(
//   users,
//   fn._count_by(user => user.age - (user.age % 10)),
//   console.log
// )

// fn._go(users,
//   fn._group_by(fn._pipe(fn._get('name'), fn._head)),
//   console.log);


// fn._pipe(fn._map(fn._get('name')))(users)

// console.log(fn._map(fn._get('name'))(users));

fn._go(
  users,
  fn._curryr(fn._map)(fn._get("name")),
  console.log
)