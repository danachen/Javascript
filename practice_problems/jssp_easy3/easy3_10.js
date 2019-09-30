// Letter counter 2

// Similar to the last exercise, exclude non-letters when determining word size
// Need to filter the input string by stripping out non-letters
// inputString.match(/\w+/, i)

// use of the replace method for String, replace(regex, ''), and to use regex = /[^A-Za-z ]/g

function wordSizesUnfiltered(str) {
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

function wordSizes(str) {
  var regex = /[^A-Za-z ]/g;
  var newStr = str.replace(regex, '')
  console.log(newStr);
  return wordSizesUnfiltered(newStr);
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}