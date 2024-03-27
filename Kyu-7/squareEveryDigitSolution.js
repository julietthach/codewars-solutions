function squareDigits(num) {
  let nums = Array.from(num.toString());
  let numsSquared = nums.map((num) => Math.pow(num, 2));
  let squaredDigits = parseInt(numsSquared.join(""));
  return squaredDigits;
}
