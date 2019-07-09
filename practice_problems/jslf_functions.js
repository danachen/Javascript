// Local vs Global Part 1
var myVar = 'This is global';
function someFunction() {
  var myVar = 'This is local';
}
someFunction();
console.log(myVar);

/*
On line 6, function `someFunction` is invoked, where the local variable `myVar` is assigned
Line 7 would access only the global var, printing out `This is global`
*/

// Local vs Global Part 2
var myVar = 'This is global';
function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}
someFunction();

/*
Line 18 will print out `This is local`, since it will access the local var
This is called shadowing, where the local scope of function can't access the global var
*/

// Local vs Global Part 3
var myVar = 'This is global';
function someFunction() {
  myVar = 'This is local';
}
someFunction();
console.log(myVar);

/* 
On line 32, the function someFunction is invoked, where the gloval var myVar is reassigned
to `This is local`.
On line 33, the console prints out the gloval var, which now holds the value `This is local`
Because var in the global scope can be accessed and modified from within an inner scope
*/

// Variable Lookup
var myVar = 'This is global';
function someFunction() {
  console.log(myVar);
}
someFunction();

/*
On line 47, the function `someFunction` is invoked, where the console will print out
the global var `myVar`, which is accessible from the inner scope
The function first attempts to find a var with the name in the local scope. If that doesn't exist,
then it will keep looking in the next outer scope
*/

// *Variable Scope
function someFunction() {
  myVar = 'This is global';
}
someFunction();
console.log(myVar);

/*
Even though there's no var declaration for `myVar`, and the outer scope also has no declaration,
JS binds `myVar` to be a property of the global object.
Almost the same as if `myVar` was globally declared.
*/

// Arguments Part 1
var a = 7;
function myValue(b) {
  b += 10;
}
myValue(a);
console.log(a);

/*
 `a` is assigned 7, and this is a primitive valuea and thus immutable
 Passing `a` assigned a primitive value as an argument to a function, and using it on any operation in
 the body of the function does not have effect on value assigned to a
*/

// Note if the console prints out b within the function's local scope, then it will be 17
var a = 7;
function myValue(b) {
  b += 10;
  console.log(b);
}
myValue(a);
console.log(a);

// Arguments Part 2
var a = 7;
function myValue(a) {
  a += 10;
}
myValue(a);
console.log(a);

/* 
Same result as the previous example
This example demonstrates variable shadowing however.
The argument passed into the function is a local var with the same name as the corresponding parameter created within the inner scope of the function
One `a` has global scope, the other is in the function's local scope
The reassignment of local var a with the function has no effect on global var `a`
*/

// Arguments Part 3, skip

// Variable Declarations
console.log(a);
var a = 1;

/* 
undefined is outputted, since the var declaration is hoisted to top of execution
*/

// Function Declarations
logValue();
function logValue() {
  console.log('Hello, world!');
}

/*
Function declaration hoisting means that everything, including function name and body, is hoisted.
So in this case, the program can execute a function before declaring it
*/

