// Double char part 2

// Input: string; output: return every consonant twice

/*
Approach: construct a new string
Initialize a new string, add each element of the old string
Add a constant that includes all the vowels
If the element of the string is not one of the vowels, then double
Else just add the existing element
*/

// Using String.prototype.match
// setting var by var = /^[a-zA-Z]/g;

function repeater(str) {
  return str.split('').map(char => char += char).join('');
}

function doubleConsonants(str) {
  var strArr = str.split('');
  var letters = /^[bcdfghjklmnpqrstvwxyz]/g;
  return strArr.map (function(el) {
    if (el.match(letters)) {
      return el += el;
    } else {
      return el;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""