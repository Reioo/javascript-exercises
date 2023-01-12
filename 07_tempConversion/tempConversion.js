const convertToCelsius = function(givenTemperature) {
  let celsius = 0;
  var multiplier = Math.pow(10, 1 || 0);
  celsius = (givenTemperature - 32) * (5/9);
  celsius = Math.round(celsius * multiplier) / multiplier
  return celsius;
};

const convertToFahrenheit = function(givenTemperature) {
  let fahrenheit = 0;
  var multiplier = Math.pow(10, 1 || 0);
  fahrenheit = (givenTemperature * (9/5)) + 32;
  fahrenheit = Math.round(fahrenheit * multiplier) / multiplier
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
