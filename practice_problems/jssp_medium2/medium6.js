// Write a function that computes the difference between the square of the sum of the first 
// n positive integers and the sum of the squares of the first n positive integers.

function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquares(num);
}

function squareOfSum(num) {
  var sum = 0;
  for (i = 0; i <= num; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
}

function sumOfSquares(num) {
  var sum = 0;
  for (i = 0; i <= num; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150