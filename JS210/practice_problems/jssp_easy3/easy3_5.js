// palindromic strings part 2

// this time, the input and output are case insensitive, ignore non-alphanumeric chars

// we can call the isPalindrome() function from the previous method
// the only thing we need to add is an input processing function

// the input string should go through a filter function first

function isPalindrome(input) {
  var inputLength = input.length;
    var midPoint = Math.floor(inputLength / 2);
    for (i = 0; i < midPoint; i++) {
      if(input[i] !== input[inputLength - 1 - i]) {
        return false;
      }
    }
  return true;
}

function isRealPalindrome(input) {
  newInput = input.toUpperCase().replace(/[^0-9a-z]/gi, '');
  return isPalindrome(newInput);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
/*
function isRealPalindrome(inputString) {
  var filteredString = filterInput(inputString);
  return isPalindrome(filteredString);
}
*/

// how to filter the string? first make everything lower case
// then get rid of the non-alphanumeric chars
// use string.toLowerCase(), should do the trick in conversion
// use some kind of string.match(/\w+/, /gi), but not the _ either, so probably another || condition

// Need to look up the Regex for getting only alphanumeric