const convertToCelsius = function(fahrenheit) {
  let convertedToCelsius = (fahrenheit - 32) * 5 / 9;
  let roundedConversionToCelsius = Math.round(convertedToCelsius * 10) / 10;

  return roundedConversionToCelsius;
};

const convertToFahrenheit = function(celsius) {
  let convertedToFahrenheit = (celsius * 9 / 5 + 32);
  let roundedConversionToFahrenheit = Math.round(convertedToFahrenheit * 10) / 10;

  return roundedConversionToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
