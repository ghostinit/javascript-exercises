const convertToCelsius = function (tempF) {
  // Formula tempC = (tempF - 32) * ( 5/9 )
  let tempC = (tempF - 32) * (5 / 9);
  return Math.round(tempC * 10) / 10;
};

const convertToFahrenheit = function (tempC) {
  // Formula tempF = (tempC * 1.8)  + 32
  let tempF = (tempC * 1.8) + 32;
  return Math.round(tempF * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

