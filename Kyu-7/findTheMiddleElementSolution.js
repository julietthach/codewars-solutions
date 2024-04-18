function gimme(triplet) {
  let sortedNums = [...triplet].sort(function (a, b) {
    return a - b;
  });
  const middleNum = (num) => num === sortedNums[1];
  const result = triplet.findIndex(middleNum);
  return result;
}
