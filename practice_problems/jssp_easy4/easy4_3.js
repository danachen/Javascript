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