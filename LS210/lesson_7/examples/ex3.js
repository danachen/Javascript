// Declarative vs. imperative programming

// Pure imperative style

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
var i;

for (i = 0; i < array.length; i += 1) {
  if (array[i] % 2 === 1) {
    newArray.push(array[i]);
  }
}

console.log(newArray);

// Pure declarative style
function isOddNumber(number) {
  return number % 2 === 1;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = array.filter(isOddNumber);

console.log(oddNumbers);

