// Iteration

// Ex 1
// var fruits = ['apple', 'oranges', 'bananas'];

// fruits.forEach(function (name, index, array) {
//   console.log(name, index, array[index]);
// });

// the function is called with 3 arguments: current el, index of el, Array
// no return value of callback (forEach returns undefined)
// there must be side effects

// Ex 2
// Building one's own forEach method
// function myForEach(array, func) {
//   for (el of array) {
//     func(el);
//   }
// }

// var min = Infinity;
// var getMin = function(value) {
//   min = value <= min ? value: min;
// }

// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);

// Ex 3, passing the function as a variable
// This modifies the global variables min and max
var min = Infinity;
var max = -Infinity;

var getMinMax = function (value) {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
};

[4, 5, 12, 23, 3].forEach(getMinMax);
console.log(min, max);

// Ex 4, passing the variable function expression as an anon function expression
var min = Infinity;
var max = - Infinity;

[4, 5, 12, 23, 3].forEach(function(value) {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});
console.log(min, max);