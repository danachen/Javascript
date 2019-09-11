// var totalPages = 364;
// var energy = 100;
// var currentPage = 1;
// var cupsOfCoffee = 0

// function read() {

//   while (energy > 0 && currentPage < totalPages) {
//     currentPage += 1;
//     energy -= (5 + currentPage * 0.1);
//   }

//   console.log('Made it to page ' + String(currentPage) + '.');

//   // Drink a cup of coffee.
//   energy = 100;
//   cupsOfCoffee += 1;

//   // Continue reading.
//   if (currentPage < totalPages) {
//     read();
//   } else {
//     console.log('Done with ' + cupsOfCoffee + ' cups of coffee!');
//   }
// }

// read();

var arrayOne = [4, 'hello', [1, 'goodbye', {newObj: 'word'}]];
var arrayTwo = [];

for (el of arrayOne) {
  arrayTwo.push(el);
}

// Attempt to mutate the type of string on original and copied strings
// String(arrayOne[0]);
// console.log(typeof String(arrayOne[0]));
// console.log(typeof arrayOne[0]);
// console.log(arrayOne);
// console.log(arrayTwo); 

// Attempt to mutate a string and its effect on original and copied strings 
// arrayOne[1].toUpperCase(); // mutating a string is not possible for either the original or copied to array
// console.log(arrayTwo); 
// console.log(arrayOne);

// console.log(arrayTwo);
// console.log(arrayOne);
// console.log(arrayTwo === arrayOne);

// Reassigning an array element and its effect on orignial and copied array
// arrayOne[0] = 0;
// console.log(arrayTwo);
// console.log(arrayOne);

// Compare reassigning an array element versus reassigning an element of an object literal
// When the object was copied from arrayOne to arrayTwo, the reference was copied and not value
// ??? Is it that primitives are passed by value and objects are passed by reference?
// http://jasonjl.me/blog/2014/10/15/javascript/, it is pass by value for primitives, and pass by sharing for objects
// arrayOne[0] = 10; // this only reassigns the original array element, but does not change the array where this is copied to
arrayOne[2][0] = 10; // this reassignment of an element from an object element within the original array, changes also the array where this is copied to
console.log(arrayOne);
console.log(arrayTwo);
