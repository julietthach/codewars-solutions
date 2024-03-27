function accum(s) {
  let repeatString = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += 1;
    let string = s[i].repeat(count).toLowerCase();
    repeatString.push(string.charAt(0).toUpperCase() + string.slice(1));
  }
  let mumblingString = repeatString.join("-");
  return mumblingString;
}
