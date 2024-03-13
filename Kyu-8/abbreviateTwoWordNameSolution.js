function abbrevName(fullname) {
  let [firstname, lastname] = fullname.split(" ");
  let firstLetterArray = [];
  [firstname, lastname].forEach((n) => firstLetterArray.push(n.charAt(0)));
  let abbreviatedName = firstLetterArray.join(".").toUpperCase();
  return abbreviatedName;
}
