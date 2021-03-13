/* Write a function that takes a number of rows as the argument n 
and logs a square of numbers and asterisks. For example, if n is 7, log the following pattern:

generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567
*/

function generatePattern(rows) {
  var genString = ''
  for (i = 1; i <= rows; i ++) {
    genString += i;
    thisRow = genString + '*'.repeat(rows - i);
    console.log(thisRow);
  }
}

generatePattern(20);
