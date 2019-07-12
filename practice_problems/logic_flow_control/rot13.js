/* 
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:
For each character in the original String:
- If the character is a letter in the modern English alphabet, change it to the character 
13 positions later in the alphabet. So a becomes n. If you reach the end of the alphabet, return to the beginning. 
So o becomes b.
- Letter transformations preserve case. A becomes N while a becomes n.
- Don't modify characters that are not letters.
- Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.
*/

function rot13(input) {
  
  var CONVERSION_OFFSET = 13;
  var newString = '';
  var charCode;
  
  for (i = 0; i <= input.length - 1; i++) {
    if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 122 ) {
      newString += input[i];
    } else if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
      charCode = input.charCodeAt(i);
      charCode = (charCode - 65 + CONVERSION_OFFSET) %26 + 65;
      console.log(charCode);
      newString += String.fromCharCode(charCode);
    } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
      charCode = input.charCodeAt(i);
      charCode = (charCode - 97 + CONVERSION_OFFSET) %26 + 97;
      console.log(charCode);
      newString += String.fromCharCode(charCode);
    }
  }
  return newString;
}

// Refactor to get rid of redundant conditions
function rot13(input) {
  
  var CONVERSION_OFFSET = 13;
  var newString = '';
  var charCode;
  
  for (i = 0; i <= input.length - 1; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
      charCode = input.charCodeAt(i);
      charCode = (charCode - 65 + CONVERSION_OFFSET) %26 + 65;
      newString += String.fromCharCode(charCode);
    } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
      charCode = input.charCodeAt(i);
      charCode = (charCode - 97 + CONVERSION_OFFSET) %26 + 97;
      newString += String.fromCharCode(charCode);
    } else {
      newString += input[i];
    }
  }
  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));