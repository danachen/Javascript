// Sequence count

// Input: two integers; Output: array

/* Example
(4, -7) => (-7 x 1; -7 x 2; -7 x 3; -7 x 4)
- each resulting element is a multiple of the starting element
- Incremented up to the first integer value

var newArr = [];
function sequence(length, startingNumber) {
  for (var i = 1; i <= length; i++) {
    newArr.push(startingNumber * i);
  }
}
*/

function sequence(length, startingNumber) {
  var outputArr = [];
  for (i = 1; i <= length; i++) {
    outputArr.push(startingNumber * i);
  }
  return outputArr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []