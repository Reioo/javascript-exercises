const convertToCelsius = function(givenTemperature) {
  let celsius = 0;
  var multiplier = Math.pow(10, 1 || 0);
  celsius = (givenTemperature - 32) * (5/9);
  console.log('Before rounding' + celsius);
  celsius = Math.round(celsius * multiplier) / multiplier
  console.log('After rounding' + celsius);
  return celsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
