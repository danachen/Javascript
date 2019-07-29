/* Array Comparison
The array comparison function that we implemented in the Arrays lesson implicitly assumed 
that when comparing two arrays, any matching values must also have matching index positions. 
The objective of this exercise is to reimplement the function so that two arrays containing the 
same values—but in a different order—are considered equal. 
For example, [1, 2, 3] === [3, 2, 1] should return true.

- Compare the values of two arrays, regardless of their index positions
- Elements of the two arrays must be identical in value and type
*/

// function areArraysEqual(array1, array2) {
//   array2Temp = array2.sort();
//   for (i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2Temp[i]) {
//       return false;
//     }
//   }
//   return true;  
// }

// Without using Array.sort()

function areArraysEqual(array1, array2) {
  array2Temp = array2.slice(); // store a copy of array2
  if (array1.length != array2.length) { // immediately return false if the length are different
    return false;
  }

  for (i = 0; i < array1.length; i++) {
    index = array2Temp.indexOf(array1[i]); // check if each element of array1 exists in array2
    if (index < 0) { // if not, return false
      return false;
    } else {
      array2Temp.splice(index, 1); // if it exists, delete the element to prevent it getting compared again
    }
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
