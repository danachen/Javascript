// Palindrome part 1
// Program checks if a string is the same backwards and forwards
// Case matters, punctuations matter
// input a string, output a boolean

// method 1: construct a new string by reversing the current string
// if the current string is exactly the same as the newly constructed string, then true
// how to reverse string: is there a reverse method? otherwise, run the for (i = string.length - 1, i >= 0; i-=1)
// then attach the character of the index newString[i] one by one, newString += newString[i]

function isPalindrome(input) {
  var inputArr = input.split('');
  var inputArrReverse = inputArr.slice().reverse();
  
  for (var i = 0; i < input.length; i+= 1) {
    if (inputArr[i] != inputArrReverse[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

// method 2: check there has to be an even number of chars, otherwise false
// run two loops, each one running until the mid-way point of the length of the string
// the outer loop runs up, the inner loop runs down
// check each string at string[i] with string[j], if one does not equal, then immediately return false
// if both are looped through and there is no false, then return true for the whole function

// potential tricky point: where the mid-point is and one might need to round up so Math.ceil, and another down Math.floor

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