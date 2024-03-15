function strCount(str, letter) {
  let letterOccurrenceCount = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      letterOccurrenceCount += 1;
    }
  }
  return letterOccurrenceCount;
}
