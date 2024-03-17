function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  classPoints.forEach((peerPoints) => (sum += peerPoints));
  const classPointsAverage = Math.round(
    (sum + yourPoints) / (classPoints.length + 1)
  );

  if (yourPoints > classPointsAverage) {
    return true;
  }

  if (yourPoints < classPointsAverage) {
    return false;
  }
}
