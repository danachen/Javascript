// Reverse a string
// Take a string, first chop up the string based on the empty space into an array, then reverse the whole string
// Then reverse each individual word
function reverse(string) {
  var stringArr = string.split(' ').reverse();
  return stringArr.map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"