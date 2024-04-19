function maskify(cc) {
  let masking = "#";
  let result;
  if (cc.length <= 4) {
    result = cc;
  }
  if (cc.length > 4) {
    result = masking.repeat(cc.length - 4) + cc.slice(cc.length - 4);
  }
  return result;
}
