function sumTwoSmallestNumbers(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let lowestNumber1 = sortedNumbers[0];
  let lowestNumber2 = sortedNumbers[1];

  return lowestNumber1 + lowestNumber2;
}
