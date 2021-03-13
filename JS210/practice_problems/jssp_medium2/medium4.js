// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' 
// in that year. You may assume that the year is greater than 1752 (when the modern Gregorian 
// Calendar was adopted by the United Kingdom). 
// You may also assume that the same calendar will remain in use for the foreseeable future.

function fridayThe13ths(year) {
  var thirteenthCounter = 0;
  for (i = 0; i < 12; i++) {
    var newDate = new Date(year, i, 13);
    if (newDate.getDay() == 5) {
      thirteenthCounter += 1;
    }
  }
  return thirteenthCounter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2