// Running Totals
// Input: array of numbers, output: same array, with running total
// So every array element at index n is the sum of all elements prior and including n
// E.g. [1, 2, 3]

/*
At index 0 => 1
At index 1 => index 0 + index 1 = 3
At index 2 => index 1 + index 2
*/

// Create a new array to track the running totals
// newArr[0] = oldArr[0];
// newArr[1] = newArr[0] + oldArr[1]
// newArr[2] = newArr[1] + oldArr[2]
// Need to keep a counter of array index of the old
// newArr's current index value is evaluated based on its last arr el and oldArr at current index

// This can also probably be solved recursively, by starting at the end, and calling always the last element
/*
If we start at the end, and we say the running total of the last element in the new array is
newArr[last element] = newArr[last element - 1] + oldArr[last element]
What is the recursive element?
It's the newArr[last element - 1], because
newArr[last element - 1] = newArr[last elemnt - 1] + oldArr[last element]

so the function would look like:
function findLastElement(oldArr) {
  for (idx in oldArr) {
    newArr[last_element] = function findLastElement + oldArr[last_element];
  }
}
*/

// Method 1, iteratively
function runningTotal(oldArr) {
  if (oldArr.length === 0) {
    return oldArr;
  }

  var newArr = [];
  newArr[0] = oldArr[0];
  var newArrayCurrentElement;
  
  for (var i = 1; i < oldArr.length; i++) {  
    newArrayCurrentElement = newArr[i - 1] + oldArr[i];
    newArr.push(newArrayCurrentElement);
  }
  return newArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Further exploration: using the map function

function runningTotal(oldArr) {
  var newArr = [];
  var newSum = 0;
  oldArr.map(function(num) {
    newSum += num;
    newArr.push(newSum) ;
  });
  return newArr;
}