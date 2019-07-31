/* Array Object Part 2
Given the code below, the user expects the average function to return 5. 
Is the user's expectation correct? Why or why not? */

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5; // [5, 5, '-1': 5, '-2': 5]

function average(array) {
  var sum = 0;
  var i;
  var counter = 0; // to count the length of array

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
    counter += 1;
  }

  console.log(sum / counter); // this calculates the proper length of array
  return sum / array.length; // 5
}

console.log(myArray); // [ 5, 5, '-1': 5, '-2': 5 ]
console.log(myArray.length); // [ 5, 5, '-1': 5, '-2': 5 ]
console.log(average(myArray)); // 10

/* An array property with a key of anything other than a non-negative integer is not counted 
as part of the array's length. Therefore in the code above, the length of the array is 2, 
instead of 4 like the user expected. 
So the expression in the return statement evaluates to 20 / 2 and the function returns 10. */

