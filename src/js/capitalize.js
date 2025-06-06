export default function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("The value must be a string");
  }

  return str.slice(0, 1).toUpperCase() + str.slice(1);
}