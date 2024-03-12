function past(h, m, s) {
  let hours = h * (60000 * 60);
  let minutes = m * 60000;
  let seconds = s * 1000;

  let milisecondsPastMidnight = hours + minutes + seconds;

  return milisecondsPastMidnight;
}
