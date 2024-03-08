var humanYearsCatYearsDogYears = function (humanYears) {
  let CatYears;
  let DogYears;
  if (humanYears === 1) {
    CatYears = 15;
    DogYears = 15;
  }
  if (humanYears === 2) {
    CatYears = 15 + 9;
    DogYears = 15 + 9;
  }
  if (humanYears >= 3) {
    CatYears = (humanYears - 2) * 4 + 24;
    DogYears = (humanYears - 2) * 5 + 24;
  }

  return [humanYears, CatYears, DogYears];
};
