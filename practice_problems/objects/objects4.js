/* Dynamic: What will the following code log to the console and why? */

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); //678 => the value of prop2 (the string '456') is used as the key
// This line does not log undefined because a property with the name of '456' and a value of '678' 
// was added to myObject on line 9 using the prop2 variable.

console.log(myObject.prop2); //456
// On line 12, when the 'prop2' (string literal) property of myObject is accessed, 
// the value logged ('456') is different from the value assigned on line 3 ('234') 
// because this property was reassigned on line 8.
console.log(myObject); //{ '456': '678', prop1: '123', prop2: '456', 'prop 3': '345' }


// What's returned here?
var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // {funcProp: 'hello, '}
myObj[myFunc()] = 'world!'; 
console.log(myObj); // {funcProp: 'world!'}