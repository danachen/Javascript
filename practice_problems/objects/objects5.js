/* Array Object Part 1: what is logged? */

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray.e); // 5
console.log(myArray); //['a', 'b', 'c', 'f', '-1': 'd', e: 5]

/* Using -1 as an "index" (or key), on line 4, does not return the last value of the array but instead returns undefined, 
which is the expected result when trying to access an object's property that is not defined or does not exist. 
If you take a look at the array logged on line 12, you can see that for any of its values that have a key 
(property name) of anything besides a non-negative integer, the key is also displayed when the array is logged. */