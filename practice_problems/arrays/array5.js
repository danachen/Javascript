// 5. Array Pop and Push

// function pop(arr) {
//   poppedValue = arr[arr.length - 1];
//   arr.splice(arr.length - 1);
//   return poppedValue;
// }

// // pop
// var array = [1, 2, 3];
// console.log(pop(array));                        // 3
// console.log(array);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

//* Uses the arguments object, the array getting mutated is passed in as an argument
function push(arr) {
  var length = arguments.length;

  for (i = 1; i < length; i++ ) {
    arr[arr.length] = arguments[i];
  }
  return arr.length;
}

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
