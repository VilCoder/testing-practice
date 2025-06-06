export default function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("The value must be a string");
  }

  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
}