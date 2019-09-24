// Example 2: Abstractions

function iterate(array, callback) {
  var i;
  for (i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// This is a level of abstraction provided by the earlier function
// Note the format of the iterate function now
// iterate (array, function .....)
// The logic of the oddOrEven function is wrapped inside the iterate function
// function (number) is the callback function in the iterate function

/*
so the callback argument from the iterate function is this entire block of code:
function (number) {
  if (number % 2 === 0) {
    console.log('even);
  } else {
    console.log('odd');
  }
}
*/

// The iterate function actually looks like this:
// iterate(array, function(num) { if... else block in here});

function oddOrEven(array) {
  iterate(array, function (number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}

// Alternatively, use the built-in function
// function oddOrEven(array) {
//   array.forEach(function (number) {
//     if (number % 2 === 0) {
//       console.log('even');
//     } else {
//       console.log('odd');
//     }
//   });
// }

arr = [1, 2, 3, 4]
oddOrEven(arr);
