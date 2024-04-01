function capitalize(s) {
  let arr1 = s.split("");
  let arr2 = s.split("");
  for (i = 0; i < arr1.length; i++) {
    if (i % 2 === 0 || i === 0) {
      arr1[i] = arr1[i].toUpperCase();
    }
    if (i % 2 != 0) {
      arr2[i] = arr2[i].toUpperCase();
    }
  }
  let result = [arr1.join(""), arr2.join("")];
  return result;
}
