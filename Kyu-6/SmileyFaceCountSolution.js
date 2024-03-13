function countSmileys(arr) {
  let validSmileysCount = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    let smiley = arr[i];
    let eyes = smiley.charAt(0);
    let mouth = smiley.charAt(smiley.length - 1);

    if (
      smiley.length === 2 &&
      (eyes === ":" || eyes === ";") &&
      (mouth === ")" || mouth === "D")
    ) {
      validSmileysCount += 1;
    }

    if (smiley.length >= 3) {
      let nose = smiley.replace(eyes, "").replace(mouth, "");
      if (
        (eyes === ":" || eyes === ";") &&
        (nose === "-" || nose === "~") &&
        (mouth === ")" || mouth === "D")
      ) {
        validSmileysCount += 1;
      }
    }
  }

  return validSmileysCount;
}
