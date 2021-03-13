// Write a function that returns a substring of a string based on a starting index and length.

function substr(string, start, length) {
  var newString = '';
  var newLength;
  if (length + start >= string.length) {
    newLength = string.length - start;
  }
  for (i = start; i <= newLength + start - 1; i++) {
    newString += string[i];
  }
  return newString;
}

var string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

// Directly accounting for the out of bound index, also accounting for negative starts
function substr(string, start, length) {
  var newString = '';
  var index;
  var i;
  if (start < 0) {
    start = string.length + start;
  }
  for (i = 0; i < length; i += 1) {
    index = start + i;
    if (string[index] === undefined) {
      break;
    }
    newString += string[index];
  }
  return newString;
}