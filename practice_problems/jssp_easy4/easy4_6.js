// Multiplicative Average

// Input: array of integers; output: multiply all elements, then divide by length of array, rounded to 3 dec

/*
Go through each element in the array, store a variable called multiply
multiply each array element
then return the product divided by the length of the array
*/

// How to use the Number().toFixed method to round a number

function showMultiplicativeAverage(arr) {
  var productIs = arr.reduce(function(product, el) {
    return product * el;
  });
  return Number((productIs / arr.length).toFixed(3));
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"