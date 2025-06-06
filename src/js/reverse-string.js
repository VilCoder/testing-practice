export default function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("The value must be a string");
  }

  return str.split("").reverse().join("");
}
