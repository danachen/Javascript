/*
Write a function that returns a string converted to lowercase.
*/

function toLowerCase(string) {
  var lowerCase = '';
  for (i = 0; i <= string.length - 1; i++) {
    if (string.charCodeAt(i) >= 97 || string.charCodeAt(i) < 65) {
      lowerCase += string[i];
    } else {
    lowerCase += String.fromCharCode(string.charCodeAt(i) + 32);
    }
  }
  return lowerCase;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

// Not explicitly converting the lowercases already
function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;
  var i;

  for (i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}