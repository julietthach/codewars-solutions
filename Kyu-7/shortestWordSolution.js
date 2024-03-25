function findShort(s) {
  const words = s.split(" ");
  const wordsLength = words.map((word) => word.length);
  const shortestLength = Math.min(...wordsLength);
  return shortestLength;
}
