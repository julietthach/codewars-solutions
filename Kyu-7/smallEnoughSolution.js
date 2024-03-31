function smallEnough(a, limit) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= limit) {
      result.push(true);
    }
    if (a[i] > limit) {
      result.push(false);
    }
  }
  return result.includes(false) ? false : true;
}
