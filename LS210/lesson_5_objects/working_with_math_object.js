/* 1. Use Math.PI property to create a function that converts radians to degrees */

function convertToRadians(radians) {
  return radians * 180 / Math.PI;
}

console.log(convertToRadians (15));

/* 2. Use Math.abs to force a value positive. */

function absoluteValue(value) {
  return Math.abs(value);
}

console.log(absoluteValue(-150));

/*3.  Use Math.sqrt to calculate the square of a number */

function sqrtRoot (num) {
  return Math.sqrt(num);
}

console.log(sqrtRoot(16777216));

/* 4. Use Math.pow (2 args, base and exponent) to return the result of 16 to the 6th power. */
function powerOf (base, exponent) {
  return Math.pow(base, exponent);
} 

// console.log(powerOf(16, 6));

/* 5. Use Math.round to round decimal value to nearest integer. */
var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

/*6. Use Math.random to create a function that takes two arguments, min and max.
Returns random integer between numbers (including the numbers).
Handle scenario that user swaps positions of min and max, or if they are equal. */

function randomNum (num1, num2) {
  if (num1 >= num2) {
    var max = num1;
    var min = num2;
  } else {
    var min = num1;
    var max = num2;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

var num1 = 10;
var num2 = 2;
console.log(randomNum(num1, num2));