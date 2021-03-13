// Using some and very methods to interrogate an array

// function odd(number) {
//   return number % 2 === 1;
// }

// var count = [1, 2, 3, 4, 5];
// console.log(count.some(odd));              // true, some numbers are odd
// console.log(count.every(odd));             // false, every number is not odd

// Contruct my own Every and Some method

// function myOwnEvery(arr, func) {
//   for (el of arr) {
//     if (func(el) === false) {
//       return false;
//     }
//   }
//   return true;
// }

// var isAString = function (value) {
//   return typeof value === 'string';
// };

// console.log(myOwnEvery([1, 'a', 'a234', '1abc'], isAString));       // true

// function myOwnSome(arr, func) {
//   for (el of arr) {
//     if (func(el) === true) {
//       return true;
//     }
//   }
//   return false;
// }

// var isAString = function (value) {
//   return typeof value === 'string';
// };

// console.log(myOwnSome([1, 'a', 'a234', '1abc'], isAString));       // true

// Build program to see if all elements are numbers

function myOwnEvery(arr, func) {
  for (el of arr) {
    if (func(el) === false) {
      return false;
    }
  }
  return true;
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

var isANumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value);
};

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false