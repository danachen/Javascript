/*
1. Write a function named slice that accepts three arguments: an Array, a start index, and an end index. 
The function should return a new Array that contains 
values from the original Array starting with the value at the starting index, 
and including all values up to but not including the end index. Do not modify the original Array.
*/

function slice(arr, beginning, end) {
  var newArr = [];
  for(i = beginning; i < end; i++ ) {
    newArr.push(arr[i]);
  }
  return newArr;
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

/* 2. Write a function named splice that accepts three arguments: an Array, a start index, 
and the number of values to remove. 
The function should remove values from the original Array, 
starting with the first index and removing the specified number of values. 
The function should return the removed values in a new Array.
*/

