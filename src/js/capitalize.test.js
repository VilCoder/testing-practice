import capitalize from "./capitalize";

/* eslint-disable no-undef */
test("The function takes string and returns it with the first character capitalized", () => {
  expect(capitalize("carlos")).toBe("Carlos");
});

test("Throws an error if the value is not a string", () => {
  expect(() => capitalize(["jan"])).toThrow("The value must be a string");
});
