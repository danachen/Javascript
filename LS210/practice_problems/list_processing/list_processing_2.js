// Alphabetical Numbers
// Input: an array of numbers
// Output: a sorted array based on the English word for each letter
// Approach: two iterations
// the first one goes through the dictionary and selects the values (words) corresponding to the input array
// the first iteration outputs an array of all the values corresponding to input, sorted alphabetically
// the second iteration takes the sorted words array, then goes to the dictionary and grabs the key based 
// on the position of the values in the dictionary
// first iteration resulting array ['eight', 'eighteen', .... 'zero']
// looks up the keys array [ 0, 1, 2, 3, ... 20], by looking at the values array [zero, one, two three], and finding their
// respective index, so eight would be position 7 on the index, and [0, 1, 2, 3 ... 20][7] would point to 8

// const DICTIONARY = {
//   '0': 'zero',
//   '1': 'one',
//   '2': 'two',
//   '3': 'three',
//   '4': 'four',
//   '5': 'five',
//   '6': 'six',
//   '7': 'seven',
//   '8': 'eight',
//   '9': 'nine',
//   '10': 'ten',
//   '11': 'eleven',
//   '12': 'twelve',
//   '13': 'thirteen',
//   '14': 'fourteen',
//   '15': 'fifteen',
//   '16': 'sixteen',
//   '17': 'seventeen',
//   '18': 'eighteen',
//   '19': 'nineteen',
//   '20': 'twenty',
// }

// function alphabeticNumberSort(inputArray) {
//   var wordsArray = [];
//   Object.keys(DICTIONARY).forEach(function(key) {
//     wordsArray.push(DICTIONARY[key]);
//   });
//   var sortedWordsArray = wordsArray.sort();

//   var numbersArray = [];
//   sortedWordsArray.forEach(function(value) {
//     numbersArray.push(Number(Object.keys(DICTIONARY)[Object.values(DICTIONARY).indexOf(value)]));
//   });
//   return numbersArray;
// }

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                  'eighteen', 'nineteen'];

function alphabeticNumberSort(inputArray) {
  var wordsArr = [];
  inputArray.forEach(function(number) {
    wordsArr.push(NUMBERS[number]);
  });
  var sortedWordsArr = wordsArr.sort();
  var sortedNumsArr = [];
  sortedWordsArr.map(function(word) {
    sortedNumsArr.push(NUMBERS.indexOf(word));
  })
  return sortedNumsArr;
}

// Official solution - specifying how a sort should be done
function wordSort(num1, num2) {
  var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
                      'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}

// Hash was a pretty difficult data structure, try solving it using an array instead
// FE: use #sort

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]