// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. 
// You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using 
// the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

function isBlockWord(input) {
  var blocks = {'B': 'O', 'X': 'K', 'D': 'Q', 'C': 'P', 'N': 'A', 'G': 'T', 'R': 'E', 'F': 'S', 'J': 'W', 
                  'H': 'U', 'V': 'I', 'L':'Y', 'Z':'M' };

  var inputArr = input.toUpperCase().split('');
  for (i = 0; i < inputArr.length; i += 1) {
    if (Object.keys(blocks).includes(inputArr[i])) {
      var thisKey = inputArr[i];
      // console.log(blocks[thisKey]);
      delete blocks[thisKey];
    } else if (Object.values(blocks).includes(inputArr[i])) {
      var thisKeyByValue = Object.keys(blocks).find(key => blocks[key] === inputArr[i]);
      // console.log(blocks[thisKeyByValue]);
      delete blocks[thisKeyByValue];
    } else {
      return false;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true