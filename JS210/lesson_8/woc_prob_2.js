// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers,
// such as credit card numbers Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial 
// number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result

// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0), 
// then the number is valid according to the Luhn Formula; else it is not valid.
// So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. 
// This should treat, for example, "2323 2005 7766 3554" as valid. 
// You can ignore all non-numeric characters in the input string.

// Input: number, Output: boolean
// Process of determining boolean outcome: go through each number from right to left
// For each odd indexed number, double
// If this number is larger than 10, subtract by 9
// Add the new digits together
// If it's modulus 10 == 0, then it's true, otherwise false

// Algorithm: reverse the digits, then step through the array of digits and find the checksum

function luhnNumber(input) {
  var sum = checkSum(input);
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkSum(input) {
  var cleanedInputInArr = cleanInput(input).toString().split('').reverse();
  var newNum = [];
  for (i = 0; i < cleanedInputInArr.length; i+=1) {
    if (i % 2 == 0) {
      newNum.push(parseInt(cleanedInputInArr[i]));
    } else {
      if (cleanedInputInArr[i] * 2 >= 10) {
        newNum.push(parseInt(cleanedInputInArr[i]) * 2 - 9);
      } else {
        newNum.push(parseInt(cleanedInputInArr[i]) * 2);
      }
    }
  }
  return newNum.reduce(function(sum, digit) {
    return sum + digit;
  }, 0);
}

function cleanInput(input) {
  var cleanedInput = input.split('').filter(function(char) {
    if (Number.isInteger(parseInt(char))) {
      return char;
    };
  }).join('');
  return cleanedInput;
}

console.log(luhnNumber('2323 2005 7766 3554'));
console.log(luhnNumber('1111'));
console.log(luhnNumber('8763'));