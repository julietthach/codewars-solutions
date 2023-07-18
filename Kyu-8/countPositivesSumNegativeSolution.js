function countPositivesSumNegatives(array) {
    let positiveCount = 0;
    let negativeSum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 1) {
        positiveCount += 1;
      }
      if (array[i] <= -1) {
        negativeSum += array[i];
      }
    }
    return [positiveCount, negativeSum];
  }
  