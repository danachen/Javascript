# JS BASICS

## DATA TYPES
 * Five primitive data types: numbers, boolean, string, null, undefined
 * Compound data type: object (arrays, functions) can be modified without losing their identity
 * Numbers: JS uses floating point system to represent all numbers
 * As a result, adding two decimal numbers result in discrepancies
 * A few number values:
   - Infinity: number greater than any other number
   - -Infinity: number less than any other number
   - NaN: not a number, e.g. `Math.sqrt(-1)` or `2/0`
 * Boolean represents the true-values of logic
 * String: has no size limit, no distinction between single and double quoted strings. Some special chars include: 
  - \n new line
  - \t tab
  - \r carriage return
  - \v vertical tab
  - \b backspace
* To escape standard chars with single quoted strings, `'"It\'s hard to fail." - Roosevelt'`
* To escape standard chars with double quoted string, `"\"It's hard to fail.\" Roosevelt"`
* Accessing a character in a string can be done using the `String.prototype.charAt()` method on the string
  - e.g. `'hello'.charAt(1); // e`
  - bracket notation also works: `'hello'[1];`, note this is an operator and not a method in Ruby

## Primitive values
* Primitive values are immutable: can't chanage them once they are created
* Strings may appear to change, but they are only reassigned

```javascript
a = 'hello';
a.toUpperCase();  // the "hello" string is not mutated, but a new "HELLO" string is returned
a;                // still "hello"
```

* JavaScript doesn't actually change the values; instead, it assigns wholly new values to variables that used to contain different values. This means that you should remember to assign an expression to change the value in a variable; no function, method, or other operation will modify it for you. If you don't assign the new value to the desired variable, JavaScript won't do it for you.

## Variables
* To declare a variable: `var number;`
* To assign value to a variable: `number = 3;`
* Combine declaration with initialization: `var myVar = 'Hi!;`
* If a var is declared but not assigned a value, is initialized to value `undefined`

```javascript
var foo;
foo;      // undefined
```

## Dynamic typing
* JS types dynamically, meaning a var can hold a reference to any data type, and can be reassigned a different type without error

```javascript
// initialize to a string
var myVariable = 'Hello, World';

// reassign to a number
myVariable = 23;

// now the variable holds a number value
myVariable;      // 23
```

## Arithmetic operators
* 10 % 3 returns 1 no matter whether % is treated as a remainder or modulo
* In JS, `10 % -3` returns 1, in other languages, `10 % -3` might return -2

## Comparison operators
* JS performs implicit conversion, thus avoid using `==` or `!=` in favour of the stricter versions
* Strings can be compared lexicographically
* Logical `&&`: 
  - `false && []; - false`
* Logical `||`: 
  - `false || true; // true`
  - `false || []; // [](second operand is non-boolean, returned as is)`

* Logical Not `!`
  - `!1;  //false`
  - `![]; //false`

## Expressions
* An expression is any valid code that resolves to a value

```javascript
'hello';   // a single string is an expression
'Hello' + ', World' // expressions that evaluates to a character string
`10 + 13;`   // arithmetic operations are expressions
`sum = 10;`  // assignments are expressions
`10 > 9;` // expressions that evaluate to true or false

var a;
var b;
var c;

a = 3;
b = 10 + 3;         // 10 + 3 is an expression that resolves to 13 and used as part of the assignment for sum
c = (a + (3 + b));  // a more complicated expression
```

## Increment/Decrement Operations in Expressions

```javascript
var a = 1;
a++;        // same as "a = a + 1"; a is now 2
++a;        // same as "a = a + 1"; a is now 3
a--;        // same as "a = a - 1"; a is now 2
--a;        // same as "a = a - 1"; a is now 1
```
* Note how the prefix and postfix forms behave differently as part of more complex expression

```javascript
var a;
var b;
var c;

a = 1;
b = a++;  // equivalent to "b = a; a++;". so now b is 1 and a is 2
c = ++a;  // equivalent to "++a; c = a;". so now c is 3 and a is 3
```

## Short circuit evaluation in expressions

* For an expression like `a || b`, if a is true, the result is always true
* As with `a && b`, JS short circuits the evaluation if a is false, and returns false without evaluating b.

```javascript
var a = true;
var b = false;

a || (b = true);  //true, b is still false after this, because (b = true) is never evaluated
b && (a = 1);     //false, a is still true after this, because (a = 1) is never evaluated
```

## Statements
* Statements in JS don't always evaluate to a value
* Statements control the execution of the program
* Var assignments are expressions, var declarations are statements

```javascript
var a;                // a statement to declare variables
var b;
var c;
var b = (a = 1);      // this works, because assignments are expressions too
var c = (var a = 1);  // this gives an error, since a statement can't be used as part of an expression
```
* Statements help to do something, instead of giving a value to use
* `if ... else`, `switch`, and `while ... for` are also statements






