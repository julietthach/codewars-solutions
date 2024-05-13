function findMultiples(integer, limit) {
  let result = [];
  for (let i = 0; i < limit + 1; i++) {
    if (integer * i <= limit && i != 0) {
      result.push(integer * i);
    }
  }
  return result;
}
