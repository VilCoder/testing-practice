import caesarCipher from "./caesar-cipher";

/* eslint-disable no-undef */
test("Cipher a letter", () => {
  expect(caesarCipher("a", 2)).toBe("c");
  expect(caesarCipher("A", 2)).toBe("C");
});

test("Cipher letters with rotation", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Preserves upper and lower case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Preserves signs and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Works with shift greater than 26", () => {
  expect(caesarCipher("abc", 29)).toBe("def");
});

test("Works with negative shift", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("Works with errors", () => {
  expect(() => caesarCipher(123, 3)).toThrow(
    "Verify that the values are correct"
  );
  expect(() => caesarCipher('abc', "three")).toThrow(
    "Verify that the values are correct"
  );
  expect(() => caesarCipher(123, "one")).toThrow(
    "Verify that the values are correct"
  );
  expect(() => caesarCipher([], -2)).toThrow(
    "Verify that the values are correct"
  );
  expect(() => caesarCipher(null, 6)).toThrow(
    "Verify that the values are correct"
  );
});
