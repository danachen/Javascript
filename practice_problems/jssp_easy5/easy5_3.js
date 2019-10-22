// Reverse number

// Input: integer; output: integer reversed

/*
Approach 1: dis-match any 0, converse into string, split into array, reverse, built string, turn into number

Approach 2:
- Divide by 10 until the number is less than 10, insert remainders into an array if the remainder is not 0
- Add elements of array into a string, turn string into a number
*/

function reverseNumber(num) {
  return String(String(num).split('').reverse().filter(el => el != 0).join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1