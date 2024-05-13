function binToDec(bin) {
  let binaryNums = bin.split("").reverse();
  let result = 0;
  for (let i = 0; i < binaryNums.length; i++) {
    result += binaryNums[i] * Math.pow(2, i);
  }
  return result;
}
