// Lesson 1: Var scopes in JS (1)
// Prob 1: Predict output

var a = 'outer';
function testScope() {
  var a = 'inner';
  console.log(a);
}
console.log(a); // outer
testScope();    // inner
console.log(a); // outer

/* Look for where the first function invocation occurs
On line 8, a is invoked. Since a resolves as global variable, the value `outer` is logged
On line 9, the function testScope() is invoked, this resolves a as the local var
On line 10, the a resolves as the global var again, and logs outer
*/

// Problem 2
var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*
On line 26, the a resolves to the global variable `outer`
On line 27, function testScope() is invoked, and the variable a is reassigned to inner.
Therefore, the second log will print out `inner`
On line 28, the global var a will now print out its reassigned value 'inner'
*/

// * Problem 3
var basket = 'empty';
function goShopping() {
  function shop1() {
    basket = 'tv';
  }
  console.log(basket); // empty
  function shop2() {
    basket = 'computer';
  }
  function shop3() {
    var basket = 'play station';
    console.log(basket); // play station
  }
  shop1();
  shop2();
  shop3();
  console.log(basket); // computer
}
goShopping();

/*
On line 43, the variable `basket` is resolved to its original value
On line 49, the variable `basket` is resolved to be the reassigned value of basekt on line 48
On line 54, function call on line 53 does not alter value of basket global, but defines a local var with same name
Line 54 logs the value of the global basket
Note that each local basket var goes away upon returning
*/

// * Problem 4
function hello() {
  a = 'hello';
}

hello();
console.log(a);

/*
On line 71, the function hello() is invoked
Value of `hello` is assigned to the variable
This is a global var since it's not declared with `var`
Line 72 prints out `hello`
*/

// This is identical to the below, where a is declared at the global level
var a;
function hello() {
  a = 'hello';
}
hello();
console.log(a);
// 

// * Problem 5
function hello() {
  var a = 'hello';
}
hello();
console.log(a);

/*
In this case, var is a local var declared within the function `hello`
a is not available as a global variable, so the logging message should output Uncaught ReferenceError
*/

// * Problem 6
console.log(a);
var a = 1;

// Equivalent after hoisting
var a;
console.log(a);
a = 1;

/*
Hoisting would move the variable decalration to the top
But it would only hoist the declaration, not the assignment
Line 103 would output `a is undefined`
*/

// * Problem 7
console.log(a);
function hello() {
  a = 1;
}

// After hoisting
function hello() {
  a = 1;
}
console.log(a);

/* 
The function declaration is hoisted to the top
When the console calls for a, a `ReferenceError` is printed
The method is not called, so the value of a is not yet assigned
a is not declared anywhere either, so line 118 would produce a ReferenceError
*/

// Lesson 1: Var scopes in JS (2)
// * Problem 1: scoping on a functional level or block level?
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }
  console.log(a);
}
say();

/*
On line 143, the console attempts to print out the value of variable `a`, this will return 'undefined'.
We need to see the code after hoisting
*/
function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }
  console.log(a);
}
say();
// In this case, `a` is declared but not assigned a value. Remember that JS is scoped at the functional level, not block-level.

// * Problem 2: global var and function scoping
function hello() {
  a = 'hello';
  console.log(a);
  if (false) {
    var a = 'hello again';
  }
}
hello();
console.log(a);

// After hoisting
function hello() {
  var a;
  a = 'hello';
  console.log(a);
  if (false) {
    a = 'hello again';
  }
}
hello();
console.log(a);

/*
On line 164, the console attempts to print out variable `a`, which has been initialized and assigned to hello.
On line 169, the function `hello` is invoked
On line 170, the console attempts to print out the value of `a` again, but `a` is not a global variable, its scope is the body of `hello()`
*/

// * Problem 3: Effect of hoisting var when global var already exists
var a = 'hello';
for (var i = 0; i < 5; i += 1) {
  var a = i;
}
console.log(a);

/*
On line 195, the console prints out the value of the global `a`. 
The var declaration on line 193 is hoisted to the top of the global scope. Since a global variable `a` exists, the hoist has no direct effect on operations.
Line 195 logs 4.
*/

// * Problem 4: return values from function, and multiple global var reassignments.
var a = 1;
function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }
  return bar();
}
console.log(foo());
console.log(a);

/*
Line 213 logs the function `foo()`, where it returns the value of the `bar` function, with a value of 4.
Line 214 logs the var `a`, which is the global variable which value has been changed twice, first to 2, then to 3.
Remember the var `a` reassigned within the function `foo()` is hoisted to the top, where they replace the value of the global var `a`.
*/

// * Problem 5: function return value vs. global/local var
var a = 'global';
function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }
    return superNested();
  }
  return nested();
}
console.log(checkScope());
console.log(a);

/*
On line 236, the console logs the return value of `checkScope()`, and we reach into the `superNested()` function with a return value of `superNested`
On line 237, we look at the value of var `a`, each scope contains its own local var `a`, so the global `a` is never changed and stays at `global`
*/

// * Problem 6: var reassignment within a function
var a = 'outer';
var b = 'outer';
console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);
function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
/*
Line 247 prints out `outer`, line 248 prints out `outer` as well.
On line 250, `console.log(a)` prints out the same `outer` since assigning an argument to a function has no effect on it (assining a value to `foo` in this case).
On line 251, the reassignment of `b` on line 254 takes effect, and `b` now holds the value `inner`.
*/

// * Problem 7: global var vs. function parameter of the same name
var total = 50;
var increment = 15;
function incrementBy(increment) {
  total += increment;
}
console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

/*
Line 268 prints out 50, since the function parameter `increment` is not the same as the global var on 264
Line 270 prints out 60, 10 is passed in as `increment`, and the global var total is updated
Line 271 prints out 15, which is the global var
*/

// * Problem 8: function expression and var assignment of function
var a = 'outer';
console.log(a);
setScope();
console.log(a);
var setScope = function () {
  a = 'inner';
};

// With hoisting
var a;
var setScope;
a = 'outer';
console.log(a);
setScope();
console.log(a);
setScope = function () {
  a = 'inner';
};

/* 
Line 281 returns `outer`
With hoisting, setScope is initialized but not assigned
Since setScope() is assigned the function after the method invocation, line 293 would return setScope is not a function and exit
*/
