function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "X" || str[i] === "x") {
      xCount += 1;
    }
    if (str[i] === "O" || str[i] === "o") {
      oCount += 1;
    }
  }
  return xCount === oCount;
}
