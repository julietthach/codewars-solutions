var number = function (busStops) {
  let passengersOn = 0;
  let passengersOff = 0;
  busStops.forEach((stop) =>
    console.log((passengersOn += stop[0]), (passengersOff -= stop[1]))
  );
  let passengers = passengersOn + passengersOff;
  return passengers;
};
