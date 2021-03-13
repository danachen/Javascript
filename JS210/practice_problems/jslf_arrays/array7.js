/* Array Shift and Unshift

Shift:
- Remove the first element: the arr is mutated
- Return the first element of the old array
*/

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    removedElement = arr[0];
    for (i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return removedElement;
  }
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

/*
Unshift:
- Take additional arguments and places them at the front of the array
*/ 

function unshift(arr) {
    for (var i = 1; i < arguments.length; i++) {
      arr.splice(i - 1, 0, arguments[i]);
      // inserts arguments[i] at index i - 1
      // note that the arguments are inserted in the order they appear
    }
    console.log(arr); // [5, 6, 1, 2, 3]
    return arr.length;
}

// Implementing unshift without splice
/*
- iterate over the arguments
- for each turn of the arguments, shift the existing array down by one
- shifting happens when arr[i] = arr[i - 1], where i is the length of the existing array + 1
- once each existing array is shifted, it should look like [1, 1, 2, 3]
- then replace the arr[0] with the current argument
- the trick is to treat this as a two-part operations
- note the use of the args parameter
*/

function unshift(arr, ...args) {
  for (var i = arr.length + args.length - 1; i > 0; i--) {
    arr[i] = arr[i - args.length];
    // each element is pushed back by the lengh of the new strings inserted
  }

  for (input in args) {
    for (var j = 0; j < args.length; j++) {
      arr[j] = args[j];
    }
  }
  return arr.length
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

// var testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// unshift(testArray, 5);           // 3
// console.log(testArray);                       // [5, 2, 3]