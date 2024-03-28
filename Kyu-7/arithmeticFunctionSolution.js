function arithmetic(a, b, operator) {
  const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const divide = (a, b) => {
    return a / b;
  };

  if (operator === "add") {
    return add(a, b);
  }
  if (operator === "subtract") {
    return subtract(a, b);
  }
  if (operator === "multiply") {
    return multiply(a, b);
  }
  if (operator === "divide") {
    return divide(a, b);
  }
}
