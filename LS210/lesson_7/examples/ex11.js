// Combining abstractions
// Problem: find the most frequently occuring letter in this array of names
// step 1: get an array of first letters
// step 2: count the letter and its occurrences
// step 3: return the most frequently occuring letter

// input names
var names = ['Heather', 'Heller', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar', 'Helen'];

// using the map function to create an array of initials of all input
var letterArr = names.map(function(name) {
  return name[0];
})

// use the reduce function to accumulate a hash of all initials and counts
var counterHsh = letterArr.reduce(function(accumulator, el) {
  // variable assigned to return value of function declaration
  // the initials array is reduced by taking in a callback function, the callback function has an accumulator and a current value
  accumulator[el] = accumulator[el] || 0;
  // the accumulator is a hash that has the key of the current value of array passed in, set to default of 0 or current value of key
  accumulator[el] += 1;
  // if exists, the current hash k-v pair is incremented by 1
  return accumulator;
  // the accumulator is returned
}, {});
// each pair is stored in a hash

var letter = Object.keys(counterHsh).reduce(function(lastLetter, currentLetter) {
  // another variable assigned to return value of a reduce function, this time, the array getting reduced is the list of keys from the previous hash
  // the result of the reduce function is going to be an element of the array, the first argument of the reducer function will be the accumulator, and the second the current value
  if (counterHsh[lastLetter] > counterHsh[currentLetter]) {
    // if the accumulator value is larger than the current value as represented by the hash
    lastLetter; // the accumulator remains
  } else {
    lastLetter = currentLetter; // otherwise, the accumulator takes on the current value
  }
  return lastLetter; // what remains in the accumulator remains
});

console.log(letter);