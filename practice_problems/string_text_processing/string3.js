// Write a function that takes a string and returns an object containing three properties:
// one representing the number of characters in the string that are lowercase letters, 
// one representing the number of characters that are uppercase letters, 
// and one representing the number of characters that are neither.

// input: string, output: hash of type of char and the count
// spaces and numbers are included as "neither"
// split the string into chars
// if the char is not at all a letter, then it's added to neither
// if char is uppercase, then count + uppercase
// otherwise it's lowercase

// test for either: /[a-z]/i.test(char)
// test for uppercase: char != char.toUpperCase()


function letterCaseCount(letter) {
  var hashCounter = {uppercase: 0, lowercase: 0, neither: 0};
  letter.split('').forEach(function(char) {
    if (/[^a-z]/i.test(char)) {
        hashCounter.neither += 1;
    } else if (char != char.toUpperCase()) {
        hashCounter.uppercase += 1;
    } else {
        hashCounter.lowercase += 1;
    }
  });
  return hashCounter;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }