// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

function isPrime(int) {

  if (int <= 1) {
    console.log(false);
    return;
  }

  for (i = 2; i <= int/2; i++) {
    if (int % i == 0) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

isPrime(1);

// Another approach: any multiples of 2 are immediately deemed not prime
// We also make sure that we don't go through all the divisors but only checking divisors that are not multiples of 2
// In this case, 3, 5, 7, 9 ... skipping all even ones
function isPrime(number) {
  var divisor;

  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}