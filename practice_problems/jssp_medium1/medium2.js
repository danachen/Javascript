// Write a function that rotates the last n digits of a number. 
// For the rotation, rotate by one digit to the left, moving the first digit to the end.
// get the last x digits of a string
// split the x digits into an array, when x is 3, 291 => 912, so each index is shifted forward by 1
// the edited part of the array becomes the string and is attached to the original unedited part of the string


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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917