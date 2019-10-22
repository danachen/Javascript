// Always return negative

// Input: integer (pos or neg); Output: negative

/*
Approach:
- Test to see if input is > 0 or not, if positive, times -1, otherwise leave alone
*/

function negative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0