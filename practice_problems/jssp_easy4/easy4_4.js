// Find the duplicate

// Input: an array of numbers
// Output: output the first duplicate number it finds

/*
Approach 1:
- initialize a new array, and pluck and place array elements from the old array one by one
- into the new array. Before pushing a new element in, check to see if the array already includes
the next element
- if an element already exists in the new array then return the element
- problem with this approach is the continual use of #include is pretty costly

Approach 2:
- sort the old array first in place
- iterate through the new array, if the current element is equal to the last element, then return this element
*/