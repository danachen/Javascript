var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// In the previous exercise, the value of the reference gets copied. 
// For this exercise, only the values of the array should be copied, but not the reference. 
// Implement two alternative ways of doing this.

// Method one

var myOtherArray = myArray.slice();

// Method two
var myOtherArray = myArray + '';

/* Solution
// Alternative 1
var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;

for (i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]

// Alternative 2
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]

The first alternative makes use of a loop to iterate over myArray to get the values at the respective indices, 
and pushes each value to myOtherArray. 
The second, more concise alternative is to leverage the Array.prototype.slice method to return 
a new array object, and consequently, a new reference value.
*/
