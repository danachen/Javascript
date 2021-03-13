// Check for uniques

function isAllUnique(string) {
  var existingLetters = [];
  var cleanString = string.replace(/\ /g, '').toLowerCase();
  // console.log(cleanString);
  var stringArray = cleanString.split('');
  for (i = 0; i < stringArray.length; i += 1){
    if (existingLetters.indexOf(stringArray[i]) > 0) {
      return false;
    } else {
      existingLetters.push(stringArray[i]);
    }
  };
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true