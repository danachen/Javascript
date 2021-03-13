// Multiply all pairs
// Input: two arrays
// Output: one array, which each element if the first array is multipled by that of the second
// Approach: for each element of the first array, time it by the second

function sortFunc(arr) {
 arr.sort(function(a, b) {
  return a - b;
 });
}

function multiplyAllPairs(arrOne, arrTwo) {
  var newArr = [];

  arrOne.forEach(function(firstEl) {
    arrTwo.forEach(function(secondEl) {
      newArr.push(firstEl * secondEl);
    });
  });
  sortFunc(newArr);
  return newArr;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
