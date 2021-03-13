// Letter Swap
// Input: string of words; output: swap the first and last words of EVERY word

/* 
- first turn string into an array
- iterate through each word
- while at each word, return a new string
- the problem is that strings are immutable, so it's not possible to mutate a string directly

Approach 1: 
- construct a new string, by first adding the last element of the old string to the new string, add index position
- 1 ... second last element of old string, then manually insert the first index element of the old string
- so three manual steps for each word in the string


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Approach 2:
- break each individual string down to an array, of first element, middle portion, and last element
- then reverse string the new array from the broken down array

- both approaches will require a new string to be constructed from scratch
- both approaches will also require each individual word to be constructed from scratch
*/


// Approach one:

// function swapWord(word) {
//   if (word.length === 1) {
//     return word;
//   }
//   var newWord = '';
//   newWord = word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
//   return newWord;
// }

// function swap(str) {  
//   var strArr = str.split(' ');
//   var newString = '';
//   for (word of strArr) {
//     newString += swapWord(word) + ' ';
//   } 
//   return newString;
// }

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

// Using the map function
function swapWord(word) {
  if (word.length === 1) {
    return word;
  }
  var newWord = '';
  newWord = word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  return newWord;
}

// function swap(str) {
//   var strArr = str.split(' ');  
//   var newStr = strArr.map(function(word) {
//     return swapWord(word);
//   });
//   return newStr.join(' ');
// }

// Interesting thing with this solution: #swapWord doesn't take any arguments, you can just pass the method in directly
function swap(str) {
  return str.split(" ").map(swapWord).join(' ');
}
//