/*
Write a function that logs the integers from 1 to 100 (inclusive) that are multiples 
of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.
*/

function intLogger(int) {
  for (i = 1; i <= int; i++) {
    if (i % 15 === 0) {
      console.log(i + '!');
    } if (i % 3 === 0 && i % 15 != 0) {
      console.log(String(i));
    } if (i % 5 === 0 && i % 15 != 0) {
      console.log(String(i));
    } else {
    continue;}
  }
}

intLogger(20);

// Refactored: getting rid of the two else if, and the else statements

function intLogger(int) {
  for (i = 1; i <= int; i++) {
    if (i % 15 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

intLogger(20);

// Further exploration: change function so it takes, as arguments, the range of numbers it should check?

function intLogger(min, max) {
  for (i = min; i <= max; i++) {
    if (i % 15 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

intLogger(15, 300);
