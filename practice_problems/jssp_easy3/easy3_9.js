// Letter counter 1

// Input: a string of characters; output: a hash that displays the number of chars for words and the # of occurrences

// A new hash will need to be constructed, in Ruby it would be the each_with_object method
// In JS?
// First break the string down into an array, iterate through each element
// An array of strings, I can count each string's length

/*
var counter = {};
for (el of newString) {
  counter[newString.length] += 1;
}
*/
// Only issue is the case where there's no key yet, then using hsh[word.length] || 0 will avoid error
// Other issue is the use of continue to skip over a branch
// Last issue is what happens when the string is empty, it should not be counted at all

function wordSizes(str) {
  var strArr = str.split(' ');
  var hsh = {};
  if (str.length === 0) {
    return hsh;
  }
  for (word of strArr) {
    if (hsh[word.length] === 0) {
      continue;
    } else {
      hsh[word.length] = hsh[word.length] || 0;
      hsh[word.length] += 1;  
    }
  }
  return hsh;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}