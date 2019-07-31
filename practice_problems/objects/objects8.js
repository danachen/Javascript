/* The End is Near But Not Here */

function penultimate(string) {
  stringArr = string.split(' ');
  return stringArr[stringArr.length - 2];
  // or,   return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/* This behavior is caused by the fact that in JavaScript, Arrays are Objects. 
By using -1 with bracket notation (e.g., myArray[-1]), we are actually telling JavaScript to access 
the property that has a key of '-1' and return that property's value.

To get the expected result, the solution uses the Array.prototype.slice method, 
can be passed a negative index as an argument to extract elements from the end of an array. 
The main difference with slice is that we must provide an endingIndex as a second argument; 
otherwise the slice method assumes that we want to get all elements from the provided startingIndex up 
to the end of the array. 
For example, given the expression [1, 2, 3, 4, 5].slice(-2), the last two elements ([4, 5]) are returned. 
The solution passes -1 as the endingIndex, causing slice to stop at index -2 (the second-to-last element). 
This is because the slice method extracts the elements up to but not including the endingIndex. 
Following this, the solution uses bracket notation to extract the word from the single-element 
array returned by slice, and thus penultimate returns a string. */