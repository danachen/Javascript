/* 1. Write a function that returns the first element of an array passed in as an argument. */

function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

// 2. Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"


// 3. Write a function that accepts two arguments, an array and an integer index position, 
// and returns the element at the given index. What happens if the index is greater than 
// the length of the array? What happens if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return?
nthElementOf(digits, -1);  // what does this return?

// 4. Can we insert data into an array at a negative index? If so, why is this possible?

digits.length;  // 6
digits[-1] = -42;
nthElementOf(digits, -1);
digits[-1];
digits['-1'];    // Note that we are using a string here, all these examples work
digits.length   // 6

/* The added element becomes part of the "array object," but it isn't properly one of the array elements. 
The digits.length property, for instance, remains unchanged.*/

// 5. Write a function that accepts an array as the first argument and an integer value, 
// count, as the second. It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  newArr = [];
  for (i = 0; i < count; i ++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Or, using slice
function firstNOf(arr, count) {
  return arr.slice(0, count);
}

var digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

// 6. Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  return arr.slice(arr.length - count, arr.length);
}

// No need to specify the end point even
function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]

// 7. Using the function from the previous problem, What happens if you pass a count 
// greater than the length of the array? How can you fix the function so it returns a new 
// instance of the entire array when count is greater than the array length?
function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr;
  } else {
    return arr.slice(arr.length - count, arr.length);
  }
}

// 8. Write a function that accepts two arrays as arguments and returns an array 
// with the first element from the first array and the last element from the second array.
function endsOf(beginningArr, endingArr) {
  newArr = [];
  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length - 1])
  return newArr;
}

// Or, without declaring a new array
return [beginningArr[0], endingArr[endingArr.length - 1]];






