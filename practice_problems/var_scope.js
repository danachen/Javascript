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
// * Problem 1
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }
  console.log(a);
}
say();


/*
*/

// * Problem 2
function hello() {
  a = 'hello';
  console.log(a);
  if (false) {
    var a = 'hello again';
  }
}
hello();
console.log(a);
/*
*/

// * Problem 3
var a = 'hello';
for (var i = 0; i < 5; i += 1) {
  var a = i;
}
console.log(a);
/*
*/

// * Problem 4
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
*/

// * Problem 5
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
*/

// * Problem 6
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
*/

// * Problem 7
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
*/

// * Problem 8
var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};
/*
*/
