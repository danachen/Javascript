/*
Implement a function that takes a string and a number times as arguments. 
The function should return the string repeated times number of times. 
If times is not a number, return undefined. 
If it is a negative number, return undefined also. 
If times is 0, return an empty string. 
You may ignore the possibility that times is a number that isn't an integer.
*/

function repeat(string, times) {
  if (times < 0) {
    return(undefined);
  } else if (times === 0) {
    return ('');
  } else if (typeof(times)!= 'number') {
    return(undefined);
  } else {
    str = '';
    for (i = 1; i <= times; i++) {
      str += string;
    }
  }
  return(str);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined