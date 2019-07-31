/* 1. Literal: identity a bug */
// The key needs to be a number or a string literal, which is wrapped in ''

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]); // test
// console.log(myObject[a]); // this one doesn't work, 'a is not defined', a ReferenceError
console.log(myObject.a); // name
console.log(myObject[1]);

/* To access the value of a property using bracket notation (e.g., object[someKey]), 
the operand inside the brackets that references the property name (key) must be a string value. 
If the operand is a number, JavaScript converts it to a string using the Number.prototype.toString() method. 
If the operand is a variable, JavaScript looks up the value (converting it to a string if necessary), 
then uses it as a key to get the corresponding property value. 
The expression myObject[a] raises a ReferenceError because JavaScript cannot find the value of the variable a, 
since it has not been declared.
*/