/*
Write a function named arraysEqual that takes two arrays as arguments. 
The function should return true if the arrays contain the same values, or false if they do not.
*/

function arraysEqual(arr1, arr2) {
  for(i = 0; i < arr1.length; i++) {
    if (arr1.length != arr2.length) {
      return false;
      break;
    } else if (arr1[i] !== arr2[i]) {
      return false;
      break;
    }
  }
  return true;
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false

