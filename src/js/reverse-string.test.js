import reverseString from "./reverse-string";

/* eslint-disable no-undef */
test("works with blank strings", () => {
  expect(reverseString("")).toEqual("");
});

test("Reverses single word", () => {
  expect(reverseString("reverse")).toEqual("esrever");
});

test("Reverses multiple words", () => {
  expect(reverseString("hello there")).toEqual("ereht olleh");
});

test("works with numbers and punctuation", () => {
  expect(reverseString("123! abc! Hello, Odinite.")).toEqual(
    ".etinidO ,olleH !cba !321",
  );
});

test("Works with errors", () => {
  expect(() => reverseString(123)).toThrow("The value must be a string");
  expect(() => reverseString(false)).toThrow("The value must be a string");
  expect(() => reverseString(undefined)).toThrow("The value must be a string");
  expect(() => reverseString([])).toThrow("The value must be a string");
  expect(() => reverseString({})).toThrow("The value must be a string");
});
