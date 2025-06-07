export default function analyzedArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The argument must be an array");
  }

  if (arr.length === 0) {
    return {};
  }

  // Checks if at least one of the values in the array is not a number
  if (arr.some((num) => typeof num !== "number")) {
    throw new Error("The values must be numbers");
  }

  return {
    average: arr.reduce((acum, current) => acum + current, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
