import capitalize from "./capitalize";

/* eslint-disable no-undef */
test("works with blank strings", () => {
  expect(capitalize("")).toBe("");
});

test("Capitalize a letter", () => {
  expect(capitalize("j")).toBe("J");
});

test("Capitalize a single word", () => {
  expect(capitalize("jan")).toBe("Jan");
});

test("Works with a capitalized word", () => {
  expect(capitalize("Jan")).toBe("Jan");
});

test("Works with word that begin with space", () => {
  expect(capitalize(" jan ")).toBe("Jan");
});

test("Works with multiple words", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("Works with errors", () => {
  expect(() => capitalize(123)).toThrow("The value must be a string");
  expect(() => capitalize(null)).toThrow("The value must be a string");
  expect(() => capitalize(undefined)).toThrow("The value must be a string");
  expect(() => capitalize([])).toThrow("The value must be a string");
  expect(() => capitalize({})).toThrow("The value must be a string");
});
