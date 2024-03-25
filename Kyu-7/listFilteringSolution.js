function filter_list(l) {
  const filteredList = l.filter((input) => typeof input === "number");
  return filteredList;
}
