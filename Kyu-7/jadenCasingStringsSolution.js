String.prototype.toJadenCase = function () {
  let stringArray = this.split(" ");
  const firstLetter = (word) => word.charAt(0);
  let capitalizeFirstLetter = stringArray.map((word) =>
    firstLetter(word) === firstLetter(word.toUpperCase())
      ? word
      : word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizeFirstLetter.join(" ");
};
