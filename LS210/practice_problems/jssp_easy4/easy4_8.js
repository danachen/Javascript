// Digits List

// Input: number; Output: digits in the number in an array

/*
Approach one:
- Turn the number into a string, and split the string, then map each string in the array into a number again

Approach two:
- Continue dividing the numbers by 10 and inserting the remainder into a new array, then reversing the array
*/

function digitList(digits) {
  return String(digits).split('').map(function (el) {
    return el = Number(el);
  });
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]