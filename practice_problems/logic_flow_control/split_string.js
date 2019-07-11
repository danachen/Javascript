/*
Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console.

Notes:
- traverse the string, break it when the delimiter is hit
- a word var is created, and adds to itself until it hits the delimiter
- it returns the existing word
- word var is reset, starts over again
*/

function splitString(string, delimiter) {
  if (delimiter === '') {
    for (i = 0; i <= string.length - 1; i+=1) {
      console.log(string[i]);
    }
    return;
  }
  
  if (delimiter === undefined) {
    return 'Error: No delimiter';
  }
  
  var word = '';
  for (i = 0; i <= string.length - 1; i+=1) {
    if (string[i] != delimiter) {
      word += string[i];
      console.log(word);
      } else {
      console.log(word);
      word = '';
    }
  }
  console.log(word);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello

// Refactored to combine the conditionals for delimiter === ''
function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('Error: No delimiter');
    return;
  }
  var word = '';
  for (i = 0; i <= string.length - 1; i+=1) {
    if (delimiter === '') {
          console.log(string[i]);
      } else if (string[i] != delimiter) {
      word += string[i];
      } else {
      console.log(word);
      word = '';
    }
  }
  console.log(word);
}