/* Mutation: What will the following code log to the console and why?*/

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

// for (i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

array2 = array1; // if array2 is the same object as array1

console.log(array2);

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2); // array2 is unchanged from the copy over from array1
// Even though array1 is an object and thus mutable, its elements are string primitives and thus immutable.

// What would happen if an object literal was part of the array1 elements pushed to array2? 
// startsWith would not work

// Would changes made to the object literal in array1 be reflected in array2?

// How would you change the code so that any changes made to array1 in the second for loop get reflected to array2?
//  