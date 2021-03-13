// Multiply Lists

// Input: two arrays: Output: one array, containing product of two array's index

/*
Approach 1:
Return a new array that's the result of two arrays getting multiplied

Approach 2:
Mutate one of the arrays by having it multiplied by the other array elements

for (el of arrayOne) {
  arrayOne[el] *= arrayTwo[el]
}
*/

function multiplyList(arr1, arr2) {
  var newArr = [];
  for (i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
