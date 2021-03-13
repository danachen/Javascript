/* Write a function that takes a string as an argument, and returns the 
string stripped of spaces from both ends. Do not remove or alter internal spaces

- taking the input string and eliminating all spaces won't work
- trimming from either ends, so trimming from the beginning until you encounter a letter
- trimming from the end until you encounter a char
*/

function trim(input) {
  var newArray = [];
  var letterYet;
  for (i = 0; i <= input.length - 1; i ++) {
    if (input[i] != ' ') {
      letterYet = true;
      newArray.push(input[i]);
    } else if ((input[i] === ' ' && (input[i - 1] != ' ' || input[i + 1] != ' ') && letterYet)) {
      newArray.push(input[i]);
    }
    else {
      continue;
    }
  }
  console.log(newArray.join(''));
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

