// Write a function that takes an array of strings, and returns an array of the same strings 
// values without the vowels (a, e, i, o, u).
// First split the array into words, use map to save the output
// For each word, split into an array of characters and process them
// Each char is filtered and is only saved if it's not a vowel

function removeVowels(input) {
  var newArr = input.map(function(word) {
    return word.split('').filter(char => /[^aeiou]/i.test(char)).join('');
  });
  return newArr;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
