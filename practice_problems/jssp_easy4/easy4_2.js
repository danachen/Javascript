// Combining arrays
// Input: two arrays, output: find the union of values between two
// In other words, find the unique value of the group, no duplicates

// There's probably two ways of doing this

/*
Approach 1: 
A new array is created by feeding array one in, and then adding each element of the second array incrementally
A new second array element is added only when it's not already inclueded in the first array
Return the newly constructed array

Approach 2:
Add two arrays, then use some kind of #uniq method to filter out the duplicates
*/