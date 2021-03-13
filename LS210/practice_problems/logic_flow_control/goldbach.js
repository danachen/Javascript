/*
log every pair of primes that sum to the number supplied as an argument
for each input, find primes that sum up to the input
starting with 2, check 2 and input-2 whether they are primes or not
e.g. if input is 12, 2 + 10, 3 + 9, 4 + 8, 5 + 7
*/

function isPrime(int) {
  if (int <= 1) {
    return false;
  }

  for (i = 2; i <= int/2; i++) {
    if (int % i == 0) {
      return false;
    }
  }
  return true;
}

// Interestingly, this approach doesn't work
// function checkGoldbach(input) {
//   for (i = 2; i <= input - 2; i++) {
//     num1 = i;
//     num2 = input - i;
//     if (isPrime(num1) && isPrime(num2)) {
//       console.log(num1, num2);
//       return;
//     }
//   }
// }

function checkGoldbach(input) {
  if (input < 4 || input % 2 != 0) {
    console.log(null);
    return;
  }

  var num1;
  var num2;

  for (num1 = 2; num1 <= input; num1++) {
    num2 = input - num1;
      if (isPrime(num1) && isPrime(num2)) {
        console.log(num1, num2);
        return;
      }
    }
}

checkGoldbach(13);