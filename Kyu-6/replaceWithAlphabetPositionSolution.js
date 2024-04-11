function alphabetPosition(text) {
  let sentence = text
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let nums = sentence.map((letter) => (letter = alphabet.indexOf(letter) + 1));
  let result = nums.filter((num) => num != 0).join(" ");
  return result;
}
