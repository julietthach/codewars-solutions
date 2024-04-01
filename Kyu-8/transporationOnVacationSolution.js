function rentalCarCost(d) {
  let total;
  if (d < 7) {
    total = d * 40;
  }
  if (d >= 3) {
    total = d * 40 - 20;
    if (d >= 7) {
      total = d * 40 - 50;
    }
  }
  return total;
}
