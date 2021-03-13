// Combine two lists
// Input: two arrays; Output: criss cross of two arrays

// Method 1: Construct a new array, iterate through one of the two arrays, then add one index at a time
// Is there also a #zip method that can zip through both arrays and return a new array?

// Method 2: Combine two arrays
// Then construct a new array and push to it each index i and i + 3, until it reaches the mid-point of the new array

function interleave(arr1, arr2) {
  var newArr = [];
  for (i = 0; i < arr1.length; i ++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

