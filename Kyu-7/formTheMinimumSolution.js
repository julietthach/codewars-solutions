function minValue(values) {
  const filteredArr = [...new Set(values)];
  const result = Number(filteredArr.sort().join(""));
  return result;
}
