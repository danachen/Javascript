/* Write a function that determines and returns the ASCII string value of a string passed in as an argument. 
The ASCII string value is the sum of the ASCII values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)
Note that i < input.length, or i <= input.length - 1, but not i <= input.length
*/

function asciiValue(input) {
  var sum = 0;
  for(i = 0; i < input.length; i++) {
    sum += input.charCodeAt(i);
  }
  return sum;
}

console.log(asciiValue('Four score'));         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0