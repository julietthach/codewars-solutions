function fakeBin(x) {
  const nums = x.split("");
  const result = nums.map((num) => (num >= 5 ? (num = 1) : (num = 0))).join("");
  return result;
}
