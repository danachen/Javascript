/* Convert a Signed Number to a String */
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

function signedIntegerToString(num) {
  if (num == 0) {
    return '0';
  } else if (Math.abs(num) == num) {
      strArr = integerToString(num).split("")
      strArr.splice(0, 0, '+');
      return strArr.join("");
  } else {
      strArr = integerToString(num * -1).split("")
      strArr.splice(0, 0, '-');
      return strArr.join("");
    }
  }

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"

// Official solution
function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else {
    return integerToString(number);
  }
}