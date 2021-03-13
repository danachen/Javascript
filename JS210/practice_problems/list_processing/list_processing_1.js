// Sum of digits
// Input: a number
// Output: sum of two digits
// Easiest approach: convert to string, split into elements, convert back to number and use reduce to find sum

function sum(inputNumber) {
  var inputNumberString = String(inputNumber);
  var inputArray = inputNumberString.split('');
  var sum = 0;
  inputArray.forEach(function(str) {
    sum += Number(str);
  });
  return sum;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45