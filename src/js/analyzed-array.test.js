import analyzedArray from "./analyzed-array";

/* eslint-disable no-undef */
test("Works with empty arrays", () => {
  expect(analyzedArray([])).toEqual({});
});

test("Analyze array of numbers", () => {
  expect(analyzedArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Works with errors", () => {
  expect(() => analyzedArray("array")).toThrow("The argument must be an array");
  expect(() => analyzedArray(23, 34, 12)).toThrow("The argument must be an array");
  expect(() => analyzedArray({})).toThrow("The argument must be an array");
  expect(() => analyzedArray(true)).toThrow("The argument must be an array");
  expect(() => analyzedArray(undefined)).toThrow("The argument must be an array");
  expect(() => analyzedArray([1, 2, "three", 4])).toThrow(
    "The values must be numbers"
  );
});
