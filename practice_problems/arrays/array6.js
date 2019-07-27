/* Array and String Reverse (implementing the reverse method)
It should accept either a string or an array as an argument.
It should return a new string or array.
*/

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    var newArray = [];
    for (i = 0; i < inputForReversal.length; i++) {
      newArray[i] = inputForReversal[inputForReversal.length - i - 1];
    }
    return newArray;
  } else {
    var newString = '';
    for (i = 0; i < inputForReversal.length; i++) {
      newString += inputForReversal[inputForReversal.length - i - 1];
    }
    return newString;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]