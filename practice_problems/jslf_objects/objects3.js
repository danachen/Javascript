var arrayOne = [4, 'hello', [1, 'goodbye', {newObj: 'word'}]];
var arrayTwo = [];

for (el of arrayOne) {
  arrayTwo.push(el);
}

// any objects that were copied in are passed in by sharing, so if one were to modify the object literal, those are shared
// if a new element is inserted into the array, then the sharing breaks
arrayOne[2][2]['newObj'] = 'number';
arrayTwo[2][3] = 'word again';
console.log(arrayOne);
console.log(arrayTwo);

// // Compare reassigning an array element versus reassigning an element of an object literal
// // When the object was copied from arrayOne to arrayTwo, the reference was copied and not value
// // ??? Is it that primitives are passed by value and objects are passed by reference?
// // http://jasonjl.me/blog/2014/10/15/javascript/, it is pass by value for primitives, and pass by sharing for objects

// /*
// Javascript uses a pass by value strategy for primitives but uses a call by sharing for objects. 
// Call by sharing is largely similar to pass by reference in that the function is able to modify the 
// same mutable object but unlike pass by reference isn’t able to assign directly over it. 
// If you can stretch your imagination a bit, call by sharing is kind of what the name implies. 
// Outside objects passed into the function are shared, but once the function decides to overwrite it, 
// the sharing is off and the function only plays with its own version.
// */

// // arrayOne[0] = 10; // this only reassigns the original array element, but does not change the array where this is copied to
// arrayOne[2][0] = 10; // this reassignment of an element from an object element within the original array, changes also the array where this is copied to
// console.log(arrayOne);
// console.log(arrayTwo);


// // Attempt to mutate the type of string on original and copied strings
// // String(arrayOne[0]);
// // console.log(typeof String(arrayOne[0]));
// // console.log(typeof arrayOne[0]);
// // console.log(arrayOne);
// // console.log(arrayTwo); 

// // Attempt to mutate a string and its effect on original and copied strings 
// // arrayOne[1].toUpperCase(); // mutating a string is not possible for either the original or copied to array
// // console.log(arrayTwo); 
// // console.log(arrayOne);

// // console.log(arrayTwo);
// // console.log(arrayOne);
// // console.log(arrayTwo === arrayOne);

// // Reassigning an array element and its effect on orignial and copied array
// // arrayOne[0] = 0;
// // console.log(arrayTwo);
// // console.log(arrayOne);

// //create new array
// var arr = [1, 2, 3, 4, 5]

// //function that changes first two array values, pops the last value, and replaces the external reference with its own internal reference.
// function modifyArray(arr){
//     //update the first two array values
//     arr[0] = 100;
//     arr[1] = 200;

//     //remove the last array value, array is now length 4
//     arr.pop();
//     console.log(arr)
//     //futilly try to replace the array with another one
//     //only the internal arr has been replaced, the original arr outside this scope is still the same
//     arr = [-2534,-345,-3463,-4536,-6453];
//     // return arr;
// }

// console.log(modifyArray(arr));