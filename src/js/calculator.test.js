import { calculator } from "./calculator";

/* eslint-disable no-undef */
test("Adds 1 + 2 to equal", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract 2 - 1 to equal 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("Multiply 2 * 2 to equal 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Divide 4 / 2 to equal 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
