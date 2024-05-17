function oddOrEven(array) {
  let sum = 0;
  const addNums = array.map((num) => (sum += num));
  return sum % 2 === 0 ? "even" : "odd";
}
