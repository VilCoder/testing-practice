export const calculator = (function () {
  const checkArguments = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numeric values are allowed");
    }
  };

  const add = (a, b) => {
    checkArguments(a, b);
    return a + b;
  };

  const subtract = (a, b) => {
    checkArguments(a, b);
    return a - b;
  };
  const multiply = (a, b) => {
    checkArguments(a, b)
    return a * b;
  }

  const divide = (a, b) => {
    checkArguments(a, b);

    if (b === 0) {
      throw new Error("Cannot be divided by 0");
    }
    
    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();
