// Functional abstractions on objects

// Ex 1: Extracting the keys of an object to iterate over
// var myObject = { a: 1, b: 2, c: 3 };

// Object.keys(myObject).forEach(function (key) {
//   console.log('key: ' + key + ', value: ' + myObject[key]);
// });

// Ex 2: Working only with key or values
var myObject = { a: 1, b: 2, c: 3 };
var keys = Object.keys(myObject);                 // ["a", "b", "c"]
var values = Object.keys(myObject).map(function (key) {
  return myObject[key];
});

console.log(values);