// Reducing

// Ex 1: original use of the method

// function add(previousValue, element) {
//   return previousValue + element;
// }

// Ex 2: logging each iteration

// function add(previousValue, element) {
//   var sum = previousValue + element;
//   console.log(previousValue, element, sum);
//   return sum;
// }

// var count = [1, 2, 3, 4, 5];
// console.log(count.reduce(add));

// Ex 3: build it

function myReduce(array, func, initial) {
  var result;

  if (initial === undefined) {
    result = array[0];
  } else {
    result = initial;
  }

  array.forEach(function(element) {
    result = func(result, element);
  });
  
  return result;
}

// var smallest = function (result, value) {
//   return result <= value ? result : value;
// };

// var sum = function (result, value) {
//   return result + value;
// };

// console.log(myReduce([0, 12, 15, 1, 6], smallest));
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));

// Ex 4: another example with strings

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launched', 'target', '']));
