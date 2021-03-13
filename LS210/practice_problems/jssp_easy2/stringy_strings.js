/* Stringy Strings
Write a function that takes one argument, a positive integer,
and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.

Approach 1: if number is even, then print out multiples of 10; if number is odd, print out largest multiples and add 1
Approach 2: 
*/

function stringy(input) {
  var output;
  if (input % 2 === 0) {
    output ='10'.repeat(input/2)
  } else {
    output = '10'.repeat(input/2) + '1'
  }
  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

