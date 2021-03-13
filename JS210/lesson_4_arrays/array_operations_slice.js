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

function splice(arr, start, num) {
  removedArr = [];
  dupArr = arr; // duplicate array for access
  for (i = start; i < dupArr.length; i++) {
    if (i < start + num) {
      removedArr.push(dupArr[i]);
      for (j = start; j < dupArr.length; j++) { // each time an element is removed, the original array re-orgs
        arr[j] = dupArr[j + 1]; // each element is shifted to the left
      }
    }
  }
  arr.length = dupArr.length - num; // the array is corrected for the correct length
  return removedArr;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]

// Official solution
function splice(array, begin, number) {
  var removedValues = [];
  var i;
  for (i = begin; i < array.length; i += 1) {
    if (i < begin + number) {
      push(removedValues, array[i]);
    }
    array[i] = array[i + number]; // array at i becomes array at the element after the removed chunk
  }
  array.length = array.length - removedValues.length;
  return removedValues;
}

/* 3.
Write a function named concat that accepts two Array arguments. 
The function should return a new Array that contains the values from each of the original Arrays.
*/

function concat(arr1, arr2) {
  newArr = []
  for (i = 0; i < arr1.length; i ++) {
    newArr.push(arr1[i]);
  }
  for (i = 0; i < arr2.length; i ++) {
    newArr.push(arr2[i]);
  }
  return newArr;
}
concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

/* 4. Write a function named join that accepts two arguments: an Array and a String. 
The function should coerce each value in the Array to a String, 
and then join those values together using the second argument as a separator. 
You may assume that a separator will always be passed.
*/

function join(arr, str) {
  var newStr = '';
  for(i = 0; i < arr.length; i++) {
    if (i!= arr.length - 1) {
      newStr += arr[i] + str;
    } else {
      newStr += arr[i];
    }
  }
  return newStr;
}

// Official solution
function join(array, separator) {
  var result = '';
  var i;
  for (i = 0; i < array.length; i += 1) {
    result += String(array[i]); // always add the array element
    if (i < array.length - 1) {
      result += separator; // if not the last element, also add the separator
    }
  }
  return result;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'