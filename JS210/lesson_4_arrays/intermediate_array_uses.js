/* 1. Write a function that creates and returns a new array from its array argument. 
The new array should contain all values from the argument array whose positions have an odd index.
*/

function oddElementsOf(arr) {
  var newArray = [];
  for (i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      newArray.push(arr[i]);
      console.log(newArray);
    }
  }
  return newArray;
}

// Official solution

function oddElementsOf(arr) {
  var newArray = [];
  for (i = 1; i < arr.length; i+=2) {
      newArray.push(arr[i]);
      console.log(newArray);
  }
  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits)); // [8, 16, 42]

/* 2. Write a function that takes two arrays and returns a new array whose even positions come 
from the first array, and whose odd positions come from the second array. 
Assume that both arrays have equal length.
*/

function combinedArray(even, odd) {
  var newArray = [];
  for(i = 0; i < even.length; i++) {
    newArray.push(even[i]);
    newArray.push(odd[i]);
  }
  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters);  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

/* 3. Write a function that takes an array argument and returns a new array that contains 
all the argument's elements in their original order followed by all the argument's elements 
in reverse order. */

function backAndForth(input) {
  var newArr = input;
  for (i = input.length - 1; i >=0; i--) {
    newArr.push(input[i]);
  }
  return newArr;
}

// Official solution
function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

arr = [1, 2, 3, 4];
backAndForth(arr); 

/* 4. Use the array sort method to create a function that takes an array of numbers and 
returns a new array of the numbers sorted in descending order. Do not alter the original array. */

// Using bubble sort
function sortDescending(arr) {
  newArr = arr.slice();
  for(i = 0; i < arr.length; i++) {
    largestNum = newArr[i];
    // console.log("the largest number in this iteration at the beginning is " + largestNum);
      for (j = i + 1; j < arr.length; j++) {
        if (newArr[j] > largestNum ) {
          var tempLargestNum;
          largestNum = newArr[j];
          // console.log("the beginning newArr[j] is " + newArr[j]);
          tempLargestNum = largestNum;
          newArr[j] = newArr[i];
          newArr[i] = tempLargestNum; 
          // console.log("the new newArr[i] is " + newArr[i]);
          // console.log("the ending newArr is " + newArr);
        } 
      }
    }
  return newArr;
}

// Usingn the #sort method
function sortNumber(a, b) {
  return b - a;
}

function sortDescending(arr) {
  newArr = arr.slice();
  newArr.sort(sortNumber);
  return newArr;
}

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


/* 5. Write a function that takes an array of arrays as an argument,
and returns a new array that contains the sums of each of the sub-arrays. */

function matrixSums(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    var sum = 0;
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    newArr.push(sum);
  }
  return newArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

/* Write a function that takes an array, and returns a new array with duplicate elements removed.*/

function uniqueElements(arr) {
  newArray = [];
  for(i = 0; i < arr.length; i++) {
    if (newArray.includes(arr[i]) == false) { // checking the new array does not include the element getting checked
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


// Official solution
function uniqueElements(arr) {
  var uniques = [];
  var len = arr.length;
  var i;

  for (i = 0; i < len; i += 1) {
    if (uniques.indexOf(arr[i]) === -1) { // if the array element doesn't currently exist
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]






