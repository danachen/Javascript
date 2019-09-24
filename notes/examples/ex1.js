// Example 1: passing functions as arguments

function iterate(array, callback) {
  var i;
  for (i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

arr = [1, 2, 3, 4]

// Passing a function to iterate through
iterate(arr, function(number) {console.log(number);});

// Storing function in a variable and passing in as an argument
function logger(number) {
  console.log(number);
}
iterate(arr, logger);