// Implement slice and splice 

/* Slice
- input: array, begin, end index
- output: new array with extracted elements, starts from begin, up to not including end 
- side effect: does not mutate original array
*/

// function slice(array, begin, end) {
//   newArr = [];

//   if ((end-begin) > array.length) {
//     end = begin + array.length;
//   }

//   for (var i = begin; i < end; i++) {
//     newArr.push(array[i]);
//   }

//   return newArr;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// arr;                                  // [1, 2, 3]

/* Splice
- Input: array, start index, delete count, zero/more elements to be added
- Operation: removes deleteCount # of elements from array, beginning at start index
- Optional: if optional element arguments are provided, inserted into array beginning at start index
- Returns new array containing deleted elements, or empty array ([]) if none is deleted
- Side effect: splice mutates the original array.
- To mutate the original skin: need to delete the removed elements. 
*/

function splice(array, start, deleteCount, ...elements) {
  // creating the removed array
  removedArray = [];
  for (i = start; i < start + deleteCount; i++) {
    removedArray.push(array[i]);
  }

  // clean up removed array length to reflect new length
  if (deleteCount > array.length - start) {
    removedArray.length = array.length - start;
    deleteCount = removedArray.length; // make sure the max deleteCount does not exceed max array length
  }

  // mutate the original array
  originalArr = array.slice();
  for (i = 0; i < originalArr.length; i++) {
    if (removedArray.indexOf(originalArr[i]) == -1) { // finding the difference between original and removed arr

      array.unshift(originalArr[i]);   // push the difference into front of array
    }   
  }

  // cut off the original array
  array.length = originalArr.length - deleteCount;
  array = array.reverse();
  
  if (elements.length != 0) {
    // stretch out the array to accomodate the new element
    for (i = array.length + elements.length - 1; i >0 ; i--) {
      array[i] = array [i- elements.length];
    }

    for (input in elements) {
      // the length of itereation needs to accomodate the length of elements plus the start of the insertions
      for (i = start; i < elements.length + start; i++) { 
        // remember the function parameters are (array, start, deleteCount, ...elements)
        // e.g. splice(arr, 1, 2, 'two', 'three')
        // the element to inserted has the position of [1, first insertion, second insertion]
        // elements[1 - 1] = first element to be inserted at arr[1], 1 => start = 1
        // elements [ 2 - 1] = second element to be inserted at arr[2], 2 => start + 1
        array[i] = elements[i - start];
      }
    }
  }
  return removedArray;
}


// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));             // [2]
// console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 0));                    // []
// console.log(splice(arr, 1, 0, 'a'));               // []
// console.log(arr);                                  // [1, "a", 2, 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 0, 0, 'a'));               // []
// console.log(arr);                                  // ["a", 1, 2, 3]