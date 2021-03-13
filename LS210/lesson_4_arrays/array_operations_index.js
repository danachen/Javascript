/*
Write a function indexOf that accepts two arguments: an array and a value. 
The function returns the first index at which the value can be found, or -1 if the value is not present.
*/

function indexOf(arr, value) {
  for(i = 0; i < arr.length; i ++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1

/* 
Write a function lastIndexOf that accepts two arguments: an array and a value. 
The function returns the last index at which the value can be found in the array, or -1 if the value is not present.
*/

function lastIndexOf(arr, value) {
  for(i = arr.length - 1; i >= 0; i --) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1
