// Counting up

// Input: integer; Output: array between 1 to input

/* Approach 1: insert number into array until it hits the input
- Use a for loop to fill up an array, starting with 0, stoppingn when it hits integer input

* Approach 2: can also insert numbers from the largest to 1
- Using a method similar to #unshift to insert numbers backwards till it hits 1 in the loop
*/

function sequence(num) {
  var outputArr = [];
  for (i = 1; i <= num; i++) {
    outputArr.push(i);
  }
  return outputArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]