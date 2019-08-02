/* Convert a Number to a String */
function integerToString(num) {
  numStr = '';
  if (num == 0) {
    return '0'
  } else {
    do {
      numStr += num % 10;
      num = Math.floor(num / 10);
    } while (num / 10 > 0);
    return numStr.split("").reverse().join("");
  }
}
console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(123));      // "123"

