/*
Convert Celsius to Fahrenheit 
https://www.freecodecamp.org/challenges/convert-celsius-to-fahrenheit
*/

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = (celsius * (9/5)) + 32; // fahenheit = celsius * 9/5 + 32 works too.
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);