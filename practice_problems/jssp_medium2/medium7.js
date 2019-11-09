// Bubble Sort

// every consecutive pair is compared
// how to keep track of the number of swaps during each iteration

// trick is to use a while loop that takes in argument true to monitor the swapped status of the array
// and the if... else loop that allows the loop to continue progressing is not mandatory
// the overall while loop has control of two parts, one that continues the looping, the other breaks the loop if
// no swapping has taken place

function bubbleSort(arr) {
  var swapped;
  while (true) {
    swapped = false;
    for (i = 0; i < arr.length; i++) {  
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  
  return arr;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]