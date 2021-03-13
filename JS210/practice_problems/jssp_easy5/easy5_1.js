// Double char 1

// Input: takes string; Output: each char in input is doubled

/*
Approach 1: convert to an array of chars, double each char, then convert the array of chars back to a string

Approach 2: initialize a new string variable, iterate over the old string, attach double of the old string into the new string var, return new str
*/

function repeater(str) {
  return str.split('').map(char => char += char).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));       