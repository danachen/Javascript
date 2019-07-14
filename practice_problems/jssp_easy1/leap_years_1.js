/*
Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, 
or false if it is not a leap year.
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(true);
    return(true);
  }
  console.log(false);
}


// Further exploration: which tests will fail below?
// Tests that should return true that are divisible by 400

function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

// Rewite to pass the test
function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 != 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

// Test each position in order
function isLeapYear(year) {
  if (year % 4 === 0 && year % 400 != 0) {
    if (year % 100 != 0) {
      return true;
    }
  } else if (year % 400 === 0) {
    return true;
  } 
  return false;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true