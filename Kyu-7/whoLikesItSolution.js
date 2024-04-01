function likes(names) {
  let result;
  if (names.length === 0) {
    result = "no one likes this";
  }
  if (names.length === 1) {
    result = `${names[0]} likes this`;
  }
  if (names.length === 2) {
    result = `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length >= 4) {
    result = `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`;
  }
  return result;
}
