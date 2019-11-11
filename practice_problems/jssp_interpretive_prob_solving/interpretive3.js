// A collection of spelling blocks has two letters per block, as shown in this list:

// This limits the words you can spell with the blocks to only those words that do not use both letters 
// from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be 
// spelled using the set of blocks, or false otherwise. 
// You can consider the letters to be case-insensitive when you apply the rules.

// Each letter is parsed through the blocks, for each block, only the key or the value can be used but not both

// need to check if letter can be found in the pairs
// can delete the key-value pair as soon as one is found, once none can be found, return false

var block = {B: 'O',   X:'K',   D:'Q',  C:'P',   N:'A',
              G:'T',   R:'E',  F:'S',   J:'W',   H:'U',
              V:'I',   L:'Y',   Z:'M' }

function isBlockWord(input) {
  var inputArr = input.toUpperCase().split('');
  for (var letter of inputArr) {
    if (Object.keys(block).includes(letter)) {
      delete block[letter];
    } else if (Object.values(block).includes(letter)) {
      delete Object.keys(block)[Object.values(block).indexOf(letter)];
    } else {
    return false;
    }
  };
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('APPLE')); // true
console.log(isBlockWord('apple')); // true
console.log(isBlockWord('apPLE')); // true
console.log(isBlockWord('Box')); // true