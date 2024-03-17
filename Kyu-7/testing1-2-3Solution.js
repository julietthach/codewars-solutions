var number = function (array) {
  let lineNumbering = [];
  for (i = 0; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    }
    if (array.length >= 1) {
      lineNumbering.push(`${i + 1}: ${array[i]}`);
    }
  }
  return lineNumbering;
};
