function shortcut(string) {
  const vowels = /[aeiou]/gi;
  return string.replaceAll(vowels, "");
}
