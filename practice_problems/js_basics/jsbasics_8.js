/* 8. Convert a String to a Signed Number */

function stringToSignedInteger(str) {
  var sum = 0;
  strArr = str.split('');
  if (strArr[0] == '+') {
    for (i = strArr.length - 1; i > 0; i--) {
      sum +=  strArr[i] * Math.pow(10, strArr.length - i - 1);
    } 
  } else if (strArr[0] != '-') { 
    for (i = strArr.length - 1; i >= 0; i--) {
      sum +=  strArr[i] * Math.pow(10, strArr.length - i - 1);
    }
  }  else {
    for (i = strArr.length - 1; i > 0; i--) {
      sum +=  strArr[i] * Math.pow(10, strArr.length - i - 1);
    } 
    sum *= -1;
  }
  return sum;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100


// Official solution
// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case '-': return -stringToInteger(string.slice(1));
//     case '+': return stringToInteger(string.slice(1));
//     default:  return stringToInteger(string);
//   }
// }