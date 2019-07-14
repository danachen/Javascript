/*
Write a function that takes a string argument, and returns a new string that 
contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
*/

function crunch(input) {
  if (input == '') {
      return '';
  } else {
  var newString = input[0];
  for (i = 1; i < input.length; i++) {
    if (input[i] == input[i-1]) {
      newString += '';
    } else {
      newString += input[i];
      }
    } 
  }
   return newString;
}

// ANOTHER APPROACH WOULD BE TO LOOK AHEAD INSTEAD OF LOOKING BEHIND

// REGEX SOLUTION USING LOOKAHEAD
function crunch(input) {
  newString = oldString.replace(/(.)(?=\1)/gi, ""); 
  // replace all characters that are repeats of the capture group
  // the capture group is a single instance of a single character (.), (..) would be two chars
  console.log(newString);
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
