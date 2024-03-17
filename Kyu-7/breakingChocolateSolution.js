function breakChocolate(n, m) {
  let chocolateArea = n * m;
  let chocolateBreaks = chocolateArea - 1;
  if (chocolateBreaks <= 0) {
    return 0;
  }
  return chocolateBreaks;
}
