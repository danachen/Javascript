// Sum of sums
// Input: array of integers
// Output: sum of the previous numbers
// for array 3, 5, 2 => 3, 3+5, 3+5+2
// using some kind of a reduce function

function sumOfSums(arr) {
  var reducer = (sum, currentEl) => sum + currentEl;
  var newArrSum = 0;
  for (var i = 0; i < arr.length; i++) {
    var currentArr = arr.slice(0, i+1);
    newArrSum += currentArr.reduce(reducer);
  };
  return newArrSum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35