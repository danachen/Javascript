# Functions, function declaration, function expresssions
* Function declaration -> Anonymous function expressions -> Named function expressions
## Function declaration
* Function declaration is the same as a function statement
* A function declaration defines a variable whose type of function
* It does not require assignment to a variable, since the value of the function variable is the function itself
* Function declaration starts with `function`, just as var declaration starts with `var`

```javascript
function hello() {
  return 'hello world!';
}
console.log(typeof hello); //function
```
* This function variable (function itslef) obeys general scoping rules

```javascript
function outer() {
  function hello() {
    return 'hello world!';
  }
  return hello();
}
console.log(typeof hello); // can't access local scope from here
var foo = outer; // assign function to another variable
foo(); // can be used to invoke functio
```
* Recap, how is a variable created? 1. `var` keyword, 2. passing arguments to a function, 3. function declaration
* A function declaration defines a function, and it defines a variable with the same name as the function, then assigns function to variable
* With every function declaration, a variable is initialized

```javascript
var stringVar = 'string ref';
var numberVar = 42;

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar); //string
console.log(typeof numberVar); //number
console.log(typeof functionVar); //function

stringVar = functionVar;
functionVar = 'string reference';

console.log(typeof stringVar);  //function
console.log(typeof functionVar);// string
```

## Function expressions

* Defines a function as part of a larger expression syntax (variable assignment)
* It's basically a function declaration and assignment at the same time?
* An anonymous function is defined and assigned to the var `hello`, variable is used to invoke the function

```javascript
var hello = function() {
  return 'hello';
console.log(hello()); // hello
}
console.log(typeof hello); // function
```
* A function expression cannot return a value without an actual assignment invocation. If the inner function expression didn't exists, then calling the function variable `foo` would not work

```javascript
var foo = function () {
  return function () {   // function expression as return value
    return 1;
  };
};
var bar = foo();         // bar is assigned to the returned function
bar();                   // 1
```

* In this case, `foo` returns an anonymous function, the returned function expression is later assigned to `bar`

## Named function expressions
* Next, we name the expressions

```javascript
