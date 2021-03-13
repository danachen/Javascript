/*
1.  Access last value of an array with method, only has access to `length` and `[]` operators
*/

function lastInArray(arr) {
  lengthOfLast = arr[arr.length - 1];
  return lengthOfLast;
}

var arr = [1, 2, 3, 4]
lastInArray(arr)

/*
2. Create a function named rollCall that takes an array of first names as an argument
and logs all the names to the console, one name per line. 
You should log the names in the same sequence they appear in the array. Use a for loop to process the array.
*/

function rollCall(names) {
  for (i = 0; i <= names.length - 1; i+=1 ) {
    console.log(names[i]);
  }
}

names = ['A', 'B', 'C'];
rollCall(names);

/*
3.  Return content of an array in reverse form
*/

function reverseArr(arr) {
  var newArr = [];
  for (i = arr.length - 1; i >= 0; i -= 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

arr = ['A', 'B', 'C'];
reverseArr(arr);

/*
4. Finds the first instance of a value in an array and returns the index position of the value,
or -1 if the value is not in the array. 
*/

function findFirstInstance(value, arr) {
  for (i = 0; i <= arr.length - 1; i+=1) {
    if (arr[i] === value) {
      return i;
      break;
    }
  }
  return -1;
}

value = 'B';
arr = ['A', 'B', 'C', 'D', 'E'];
findFirstInstance(value, arr);

/* 5. Return a string of all values in an array */
function concatArray(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i += 1) {
    newArr.push(String(arr[i]));
  }
  return newArr.join('');
}

arr = [1, 'a', '0', 4];
concatArray(arr);