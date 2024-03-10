function getSum(a, b) {
  let nums = [a, b];
  let maxNum = Math.max(...nums);
  let minNum = Math.min(...nums);
  let sumBetweenNums = 0;
  if (a != b) {
    for (let i = minNum; i <= maxNum; i++) {
      sumBetweenNums += i;
    }
    return sumBetweenNums;
  }
  return a;
}
