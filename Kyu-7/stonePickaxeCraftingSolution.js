function stonePick(arr) {
  let craftedSticks =
    arr.filter((woodQuantity) => woodQuantity === "Wood").length * 4;
  let sticksQuantity = Math.trunc(
    (arr.filter((sticksQuantity) => sticksQuantity === "Sticks").length +
      craftedSticks) /
      2
  );
  let cobbleStoneQuantity = Math.trunc(
    arr.filter((cobbleStoneQuantity) => cobbleStoneQuantity === "Cobblestone")
      .length / 3
  );

  if (cobbleStoneQuantity === 0 || sticksQuantity === 0) {
    return 0;
  }
  if (sticksQuantity <= cobbleStoneQuantity) {
    return sticksQuantity;
  }
  if (sticksQuantity > cobbleStoneQuantity) {
    return cobbleStoneQuantity;
  }
}
