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

// The issue in solving this problem came from the forEach statement which forces you to go through the entire iteration

function findDup(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) >= 0) {
      return arr[i];
    } else {
      newArr.push(arr[i]);
    }
  };
}


console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73