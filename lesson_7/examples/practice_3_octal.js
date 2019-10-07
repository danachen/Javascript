// Octal

// Input: octal numbers, entered as a string
// Output: turn the octal into an integer

function octalToDecimal(numberString) {
  var decimal = 0;
  for (var i = 0; i < numberString.length; i++) {
    // earlier mistake was doing Math.pow(Number(numberString[i]) * 8, numberString.length - 1 - i)
    decimal += Number(numberString[i]) * Math.pow(8, numberString.length - 1 - i);
  }
  return decimal;
}

// Another solution
function octalToDecimal(numberString) {
  return numberString.split('').reduce(function (sum, digitChar, index) {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9