/* 
Create a function that computes the Greatest Common Divisor of two positive integers. 
Need to find the number that can divide into both the num and denom, need to find the biggest. 
Find the range of numbers from 2 to the denom, that can divide into both the denom and the nom
Itereate from 2 ... denom
if it can be divided into the num and the denom, it becomes the biggest divisor
go to the next iteration, if that can also be divided into both numbers, it substitutes into the biggest divisor
exit once it hits the denom
*/

function gcd(numerator, denom) {
  biggestDivisor = 1;
  for (i = 2; i <= denom; i++) {
    if (numerator % i === 0 && denom % i === 0) {
      biggestDivisor = i;
    }
  }
  return biggestDivisor;
}

gcd(12, 4);

// Further exploration: what if the numerator and denom is reversed?
function gcd(num1, num2) {
  numerator = Math.max(num1, num2);
  denom = Math.min(num1, num2);
  biggestDivisor = 1
  for (i = 2; i <= denom; i++) {
    if (numerator % i === 0 && denom % i === 0) {
      biggestDivisor = i;
    }
  }
  return biggestDivisor;
}

gcd(12, 4);

/* Further exploration: accept an array of two or more numbers
Hint:  To compute the GCD of 12, 4, and 8, for instance, you can compute:
        gcd(12, gcd(4, 8));  // 4
or,
        gcd(gcd(12, 4), 8);  // 4
*/