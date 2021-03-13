// Halvsies

// Input: array, output: 2 arrays
// Output: divide the elements into two arrays
// If the total number of arrays is odd, then put middle in first array

/*
Approach 1:
Construct the first array by finding the midpoint of the original array
Index of the original array is Math.ceil(arr.length)
The second array could just be the original array minus the first

Approach 2:
Also need to find mid-point of original array
Set up two array variables
First array goes from originalArray[i].. originalArray[midpoint]
Second array goes from originalArray[i + midpoint] ... originalArray[end]
Simultaneously filling up both arrays in one loop

Need to insert both arrays into the new array
*/

function halvsies(arr) {
  var halfWayPoint = Math.ceil(arr.length / 2);
  var arr1 = arr.slice(0, halfWayPoint);
  var arr2 = arr.slice(halfWayPoint, arr.length);
  return ([arr1, arr2]);
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]