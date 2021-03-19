// Take the number 735291 and rotate it by one digit to the left, getting 352917. 
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
// Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597. 
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. 
// You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

function rotateRightmostDigits(num, lastDigits) {
  var numStr = num.toString();
  var fixedString = numStr.substr(0, num.toString().length - lastDigits);
  var rotatedString = numStr.substr(numStr.length - lastDigits);
  var newRotatedString = rotatedString.split('').map(function(digit, idx) {
    if (idx == rotatedString.length - 1) {
      return rotatedString[0];
    } else {
      return rotatedString[idx + 1];
    }
  }).join('');
  return fixedString + newRotatedString;
}

function maxRotation(input) {
  var inputString = input.toString();
  for (i = 0; i < inputString.length; i++) {
    var newNumToRotate = rotateRightmostDigits(inputString, inputString.length - i);
    inputString = newNumToRotate;
  }
  return parseInt(inputString);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845