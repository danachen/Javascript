/* Write a function that takes a sorted array of integers as an argument, 
and returns an array that includes all the missing integers (in order) 
between the first and last elements of the argument. */

// Sorting function
function sortNum(a, b) {
  return a - b;
}

// Sort the input array
function sortedArr(arr) {
  sortedArray = arr.slice();
  sortedArray.sort(sortNum);
  return sortedArray;
}

// Generate what a perfect arr would look like
function generateArr(arr) {
  ascendingArr = [];
  startingPoint = sortedArr(arr)[0];
  endingPoint = sortedArr(arr)[arr.length - 1];
  for(i = startingPoint; i <= endingPoint; i++ ) {
    ascendingArr.push(i);
  }
  return ascendingArr;
}

// Find the missing array by checking the input arr against the ideal array
function missing(arr) {
  missingElements = [];
  sortedArray = sortedArr(arr);
  generatedArray = generateArr(arr);
  arrLen = generateArr(arr).length;
  for(i = 0; i < arrLen; i++) {
    if (sortedArray.indexOf(generatedArray[i]) === -1) {
      missingElements.push(generatedArray[i]);
    }
  }
  return missingElements;
}

// Official solution

function missing(array) {
  var result = [];
  var start = array[0] + 1;
  var end = array[array.length - 1];
  var integer;

  for (integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) {
      result.push(integer);
    }
  }

  return result;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []