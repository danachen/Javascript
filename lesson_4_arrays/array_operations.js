/* 1. Write a push function that accepts two arguments
an Arr and another value.
The push function mutates the array


function push(arr, value) {
  arrLength = arr.length;
  arr[arrLength] = value;
  return arr;
}

var count = [0, 1, 2];
console.log(push(count, 3));
*/

/* 2. Write pop that accepts an array and removes last element */

function pop(arr) {
  lastValue = arr[arr.length-1]
  return lastValue;
 }

var count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]

/* 3. Write unshift, takes array and value, inserts value at beginning of array, 
returns length of array */

function unshift(arr, value) {
  for (i = arr.length; i >=0 ; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr.length;
}

var count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]

/* 4. Write shift, takes array, removes first value from beginning of array, 
returns it 
Note that the value of the first element is captured and preserved, then the array is mutated, length is changed, and the first original element returned
*/

function shift(arr) {
  first = arr[0];
  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1; 
  return first;
}

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]

