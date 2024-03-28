function noBoringZeros(n) {
  let nums = n.toString().split("");
  const findNonZeros = (num) => num != 0;
  const endingZerosIndexStart = nums.findLastIndex(findNonZeros);
  const endingZerosAmount = nums.length - endingZerosIndexStart;
  nums.splice(endingZerosIndexStart + 1, endingZerosAmount);
  return n === 0 ? 0 : parseInt(nums.join(""));
}
