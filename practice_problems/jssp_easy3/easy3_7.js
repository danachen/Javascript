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

/*
function runningTotal(oldArr) {
  var newArr[0] = oldArr[0];

  for (idx in oldArr) {
    var newArrayCurrentElement;
    newArrayCurrentElement = newArr[idx - 1] + oldArr[idx];
    newArr.push(newArrayCurrentElement);
  }
return newArr;
}
*/

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
*

// Not sure if the recursive function works, but the approach of starting at the end seems intuitive

