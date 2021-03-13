/* 7. Convert a String to a Number
Iterate from right to left, get one digit at a time, 1 + 2 * 10 + 3 * 100
*/

function stringToInteger(str) {
  var sum = 0;
  strArr = str.split('');
  for (i = strArr.length - 1; i >= 0; i--) {
    sum +=  strArr[i] * Math.pow(10, strArr.length - i - 1);
  }
  return sum;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

// Built in function: parseInt(string, radix)
parseInt('E', 16);        // 14
parseInt('015', 10);      // 15
parseInt('F5');           // NaN
parseInt('F5', 16);       // 245