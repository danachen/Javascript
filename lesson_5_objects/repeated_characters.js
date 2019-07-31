function repeatedCharacters(input) {
  var counter = {};
  for (i = 0; i < input.length; i++) {
    var char = input[i].toLowerCase();
    if (Object.keys(counter).length === 0 || Object.keys(counter).indexOf(char) == -1) {
      counter[char] = 1;
    } else {
      counter[char] += 1;
    }
  }
  newCounter = {};
  counterKeys = Object.keys(counter);
  for (i = 0; i < counterKeys.length; i++) {
    if (counter[counterKeys[i]] > 1) {
      newCounter[counterKeys[i]] = counter[counterKeys[i]];
    }
  }
  return newCounter;
}


// Official solution
function repeatedCharacters(string) {
  var result = {};
  var lowerCaseString = string.toLowerCase();
  var i;
  var key;

  for (i = 0; i < lowerCaseString.length; i += 1) {
    if (result[lowerCaseString[i]] !== undefined) {
      result[lowerCaseString[i]] += 1;
    } else {
      result[lowerCaseString[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }