const convertToCelsius = function(passedFahrenheit) {

  celsiusValue =  (passedFahrenheit - 32) * 5 / 9;
  return +celsiusValue.toFixed(1);

};

const convertToFahrenheit = function(passedCelsius) {

  fahrenheitValue = (passedCelsius * 1.8) + 32
  return +fahrenheitValue.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
