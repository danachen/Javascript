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