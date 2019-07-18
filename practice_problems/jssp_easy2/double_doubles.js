/* 
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; return double numbers as-is.

Approach 1: slice the number in half and compare the left with right
- Understand how the substring method works:
E.g.
var str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"
*/

function twice(num) {
  numString = String(num);
  midPoint = Math.ceil(numString.length / 2);
  if (numString.substring(0, midPoint) === numString.substring(midPoint)) {
    return num;
  } else {
    return num * 2;
  }
}

// Can also separate the logic between determining a double number and then processing it

function twice(num) {
  if (doubleNum(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function doubleNum(num) {
  numString = String(num);
  midPoint = Math.ceil(numString.length / 2);
  if (numString.substring(0, midPoint) === numString.substring(midPoint)) {
    return true;
  } else {
    return false;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

