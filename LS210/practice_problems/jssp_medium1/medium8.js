// Fibonacci Numbers (Memoization)

var memo = {};

function fibonacci(number) {
  if (number == 1) {
    return 1;
  } else if (number == 0) {
    return 0;
  } else {
    if (memo[number]) {
      return memo[number]; // if the number has already been calculated, then return that number immediately
    } else {
      memo[number] = fibonacci(number - 2) + fibonacci(number - 1); // otherwise calculate it
      return memo[number];
    }
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
