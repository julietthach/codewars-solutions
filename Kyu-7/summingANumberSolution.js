function sumDigits(number) {
  let sum = 0;
  let nums = number
    .toString()
    .replace(/[^a-zA-Z0-9?]/g, "")
    .split("");
  nums.forEach((num) => (sum += parseInt(num)));
  return sum;
}
