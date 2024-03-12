function minMax(arr) {
  let minProfit = Math.min(...arr);
  let maxProfit = Math.max(...arr);
  return [minProfit, maxProfit];
}
