// Anagrams

// input: a word to look for, a list of words to look through
// output: an element of the array where the letters of the words match
// first set the word to be checked in albetical order

function filterWord(word) {
  return word.split('').sort().join('');
}

function anagram(word, list) {
  var sortedWord = filterWord(word);

  var filteredList = list.filter(function(word) {
    return sortedWord === filterWord(word);
  });
  return filteredList;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]