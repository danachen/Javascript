// Searching 101
// solicit 6 numbers from user, log a message that describes whether the 6th number appears in the first 5th

// create a prompt that asks for 6 numbers, use a loop and storage the numbers in an array
// check if the last number of the array is allow

// a loop that runs 5 times prompts the user to enter a number
// an empty array is initialized
// numbers are inserted into the array
// once the loop is finished, prompt for the last 

// let rlSync = require('readline-sync');
// var newArray = [];
// for (var i = 1; i <= 6; i++) {
//   newArray.push(rlSync.question(`Enter the ${i} number:\n`));
// }

// if (newArray.slice(0, 5).includes(newArray[5])) {
//   console.log(`The number ${newArray[5]} appears in [${newArray.slice(0, 5)}]`);
// } else {
//   console.log(`The number ${newArray[5]} does not appear in [${newArray.slice(0, 5)}]`);
// }

// Consider the use of indexOf, gives either -1, or an index  >=0 where the el can be found
// works with an array and an array element
// only run the loop for 0-5, set the last element as a separate variable
// Then, if newArray.indexOf(lastNum) >= 0, the number appears
// else the number doesn't

// If the problem is looking for a number that satisfies some condition

var val = 35;
function isIncluded(arr) {
  return arr >= val;
}

arr = [1, 2, 56, 4];
console.log(arr.some(isIncluded));