function findNeedle(haystack) {
  const needlePosition = haystack.findIndex(
    (position) => position === "needle"
  );
  return needlePosition
    ? `found the needle at position ${needlePosition}`
    : "Your function didn't return anything";
}
