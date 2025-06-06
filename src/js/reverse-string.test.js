import reverseString from "./reverse-string";

/* eslint-disable no-undef */
test("The function takes string and returns it inverted", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("Throws an error if the value is not a string", () => {
  expect(() => reverseString({str: 123})).toThrow("The value must be a string");
});
