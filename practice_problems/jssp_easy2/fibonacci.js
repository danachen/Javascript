/*
Write a function that calculates and returns the index of the first Fibonacci 
number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
(1, 1, 2, 3, 5, 8, 13, 21, ...)
- approach 1: create a loop that keeps creating the next number, as soon as it reaches the number of digits, we stop
- setting a fiboNum, and a numTwo, as well as a tempNum to hold the value for transition. As long as the length of
the fiboNum is reached, then break out of loop, and return the index tracked by i
*/

function findFibonacciIndexByLength(digits) {
  fiboNum = 1;
  numTwo = 1;
  var tempFibo;
  for(i = 2; String(fiboNum).length < digits; i++) {
    tempFibo = fiboNum;
    fiboNum = numTwo + fiboNum;
    numTwo = tempFibo;
    console.log(fiboNum);
  }
  return i;
}

// Using a do...while loop
function findFibonacciIndexByLength(digits) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fiboNum;

  do {
    fiboNum = first + second;
    index += 1;
    first = second;
    second = fiboNum;
  } while (String(fiboNum).length < digits)
  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(3));       // 12
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

console.log(findFibonacciIndexByLength(2));       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74