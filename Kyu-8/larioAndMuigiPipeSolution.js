function pipeFix(numbers) {
  let firstNum = numbers[0];
  let lastNum = numbers[numbers.length - 1];
  let result = [];
  for (let i = firstNum; i <= lastNum; i++) {
    result.push(i);
  }
  return result;
}
