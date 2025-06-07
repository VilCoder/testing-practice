import { calculator } from "./calculator";

/* eslint-disable no-undef */
describe("Functionality add test", () => {
  test("Adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("Works with errors", () => {
    expect(() => calculator.add(1, "23")).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.add("1", 23)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.add("two", 23)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.add("123", "23")).toThrow(
      "Only numeric values are allowed",
    );
  });
});

describe("Functionality subtract test", () => {
  test("Subtract 2 - 1 to equal 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  test("Works with errors", () => {
    expect(() => calculator.subtract(1, "23")).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.subtract("1", 23)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.subtract("two", undefined)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.subtract("123", "23")).toThrow(
      "Only numeric values are allowed",
    );
  });
});

describe("Functionality multiply test", () => {
  test("Multiply 2 * 2 to equal 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test("Works with errors", () => {
    expect(() => calculator.multiply(1, "23")).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.multiply("1", 23)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.multiply("two", 8)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.multiply("123", "23")).toThrow(
      "Only numeric values are allowed",
    );
  });
});

describe("Functionality divide test", () => {
  test("Divide 4 / 2 to equal 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("Works with errors", () => {
    expect(() => calculator.divide(1, "23")).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.divide("1", 23)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.divide("two", 8)).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.divide("123", "23")).toThrow(
      "Only numeric values are allowed",
    );
    expect(() => calculator.divide(123, 0)).toThrow(
      "Cannot be divided by 0",
    );
  });
});
