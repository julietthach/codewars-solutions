const binaryArrayToNumber = (arr) => {
  const binaryNums = arr.join("");
  const num = parseInt(binaryNums, 2);
  return num;
};
