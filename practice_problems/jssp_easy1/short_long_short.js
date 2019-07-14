/*
Write a function that takes two strings as arguments, determines the longer of the two strings, 
and then returns the result of concatenating the shorter string, the longer string, 
and the shorter string once again. You may assume that the strings are of different lengths.
*/

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    shortNum = str1;
    longNum = str2;
  } else {
    shortNum = str2;
    longNum = str1;
  }
  console.log(shortNum + longNum + shortNum);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"