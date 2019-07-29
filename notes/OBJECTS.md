# Objects

## Intro to objects
* Data values, functions that operate on those values are part of same object

### Standard built-in objects
* Built-in objects: `String`, `Array`, `Math`, `Date`
```javascript
// Applies toUpperCase() to a string
'hi'.toUpperCase(); // "HI"
```
* Some built-in objects has the same name as primitive data types (`String`, `Number`)
* No methods are called on primitive values, it's only the object data you can call methods on
* When needed, JS temporarily coerces primitives to object counterpart
* No need to worry about whether working with a primitive or an object
* `undefined` has no built-in object counterpart

```javascript
var a = 'hi';                        // Create a primitive string with value "hi"
typeof a;                            // "string"; This is a primitive string value

var stringObject = new String('hi'); // Create a string object
typeof stringObject;                 // "object"; This is a String object

a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"

typeof a;                            // "string"; The coercion is only temporary
typeof stringObject;                 // "object"
```
* Other primitive types are the same
* Except for `null` and `undefined`
```javascript
42.5639.toFixed(2);                  // "42.56"
true.toString();    // true 
```
### Creating custom objects
* Larger programs may need custom objects
* Those can be created using the object literal notation

```javascript
var colors = {
  red: '#f00',
  orange: '#ff0',
};

typeof colors;      // "object"
colors.red;         // "#f00"
colors.orange;      // "#ff0"
```
* Two more ways of creating objects:
- `new String('foo')`
- `Object.create()`

### Properties
* Objects contain: data, behaviour
* Data: named items with values, values representing attributes of object
* Properties: associations between name (key) and a value

```javascript
var animal = 'turtle';
animal.length;          // 6

var colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.red;             // "#f00"

'blue'.length;          // 4 - works with primitives too
```
* Setting a new value for a property with assignment is also possible:
```javascript
var count = [0, 1, 2, 3, 4];
count.length = 2;

var colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.blue = '#00f';
```

### Methods
* Functions: define behaviour of an object
* When functions are part of an object, they are methods
* To call a method on an object, access method as though it's a property, call it by appending parentheses

```javascript
(5.234).toString();       // "5.234"
'pizza'.match(/z/);       // [ "z", index: 2, input: "pizza" ]
'pizza'.match(/z/).index; 
Math.ceil(8.675309);      // 9
Date.now();               // 1467918983610
```
* Last property or method of object ends with comma when it's a multi-line literal
* This results in less changes when adding a new property (1 instead of 2 lines of changes when running `git diff`)
```javascript
// Property as last
var myObj = {
  prop1: 'sample data',
  method1: function () {},
  prop2: 'sample data',
};

// Method as last
var myObj = {
  prop1: 'sample data',
  prop2: 'sample data',
  method1: function () {},
};
```

## Object Properties

### Property Names and Values
```javascript
var object = {
  a: 1,                           // a is a string with quotes omitted
  'foo': 2 + 1,                   // property name with quotes
  'two words': 'this works too',  // a two word string
  true: true,                     // property name is implicitly converted to string "true"
  b: {                            // object as property value
    name: 'Jane',
    gender: 'female',
  },
  c: function () {                // function expression as property value
    return 2;
  },
};
```
* To access property values, use dot notation or bracket notation

```javascript
var object = {
  a: 'hello',
  b: 'world',
};

object.a;                 // "hello", dot notation
object['b'];              // "world", bracket notation
object.c;                 // undefined when property is not defined

var foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {        // function expression as property value
    return 2;
  },
};

foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd'];         // true, bracket notation can take expressions
var a = 'a';
foo[a];                   // 1, bracket notation works with variables since they are expressions
foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
foo.c();                  // 2, Call the method 'c'
```

### Adding and updating properties
* Dot notation and bracket notation can be used to add or update a new property to an object

```javascript
var object = {};              // empty object

object.a = 'foo';
object.a;                     // "foo"

object['a name'] = 'hello';
object['a name'];             // "hello"

object;                       // { a: "foo", "a name": "hello" }

object.a = 'hello';
object.a;                    // "hello"

object['a'] = 'world';
object.a;                    // "world"
```
* To delete properties from the objects, use `delete`
```javascript
var foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;                      // { b: "world" }
```

### Stepping through object properties

* It's possible to step through an object (single object can store multiple values)

```javascript
var nick;

var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs on the console:
joseph
Joey
margaret
Maggie
```

* Retrieving names of all properties in an object with `Object.keys()`

```javascript
var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

Object.keys(nicknames);  // [ 'joseph', 'margaret' ]
```

## More on iteration and enumerability

* There are a few ways to implement a simple iteration for this array

`var prices = [400, 80, 375, 870];`

1. Using a `for` loop that increments a counter, which is used as an index to access various values in `prices` array
```javascript
for (var i = 0; i < prices.length; i += 1) {
  console.log(prices[i]);
}
```

2. A `for..in` loop that iterates over the property names, used to access values in array
```javascript
for (var k in prices) {
  console.log(prices[k]);
}
```

3. A `for..of` loop that iterates over the array, used to access values in the array
```javascript
for (var v of prices) {
  console.log(v);
}
```
4. Built-in function `Array.prototype.forEach`, uses callback function to carry out some operation on each value in array
```javascript
prices.forEach(function(val) {
  console.log(val);
});
```

### Iterating over an object

```javascript
var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

// 1. A `for` loop that increments a counter, and uses it to iterate over the keys of the `products` object
var productKeys = Object.keys(products);
for (var i = 0; i < productKeys.length; i += 1) {
  var key = productKeys[i];
  console.log(key + " : " + products[key]);
}
  // logs "widget : 400", "gear : 80", "crank : 375", "lever : 870"
  
// 2. A `for...in` loop, itereates over property names in `products` object
for (var product in products) {
  console.log(product + " : " + products[product]);
}
  // logs "widget : 400", "gear : 80", "crank : 375", "lever : 870"
```

* Note that the `for..of` loop and `Array.prototype.forEach` (clearly, not Object) method won't work

### How is enumerability achieved?

* The properties on an object (object or array) has internal flags that define their behaviour, including an enumerable flag set to `true` or `false`
* The method used to access these flags is the `Object.getOwnPropertyDescriptors` method

```javascript
var prices = [400, 80, 375, 870];

var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

var pricesDescriptors = Object.getOwnPropertyDescriptors(prices);
console.log(pricesDescriptors);
  // logs:
  // { 0: {value: 400, writable: true, enumerable: true, configurable: true},
  //   1: {value: 80, writable: true, enumerable: true, configurable: true},
  //   2: {value: 375, writable: true, enumerable: true, configurable: true},
  //   3: {value: 870, writable: true, enumerable: true, configurable: true},
  //   length: {value: 4, writable: true, enumerable: false, configurable: false} }

var productsDescriptors = Object.getOwnPropertyDescriptors(products);
console.log(productsDescriptors);
  // logs:
  // { crank: {value: 375, writable: true, enumerable: true, configurable: true},
  //   gear: {value: 80, writable: true, enumerable: true, configurable: true},
  //   lever: {value: 870, writable: true, enumerable: true, configurable: true},
  //   crank: {value: 375, writable: true, enumerable: true, configurable: true} }
```

* A `for..in` loop iterates only over properties marked as `enumerable:true`
* Can manually change the flags using `Object.defineProperty` method, results in change in itereation behaviour

* If we change the enumerable flag on the property at index `1` of the array to `false`, the value is not logged
* Other iteration methods like `for..of` or `Array.prototype.forEach` remains unchanged

```javascript
var prices = [400, 80, 375, 870];
Object.defineProperty(prices, 1, { enumerable: false });

for (var k in prices) {
  console.log(prices[k]);
}
  // logs 400, 375, 870 ... the 80 is missing!
```

* Changing one of the properties to `enumerable:fasle` also affect the object

```javascript
var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

Object.defineProperty(products, "gear", { enumerable: false });

// 1
var productKeys = Object.keys(products);
console.log("productKeys: ", productKeys);
  // logs productKeys:  [ "widget", "crank", "lever" ]

for (var i = 0; i < productKeys.length; i += 1) {
  var key = productKeys[i];
  console.log(key + " : " + products[key]);
}
  // logs "widget : 400", "crank : 375", "lever : 870"
  
// 2
for (var product in products) {
  console.log(product + " : " + products[product]);
}
  // logs "widget : 400", "crank : 375", "lever : 870"
  ```
* Changing enumerability alters how `for..in` functions
* In `Object.keys`, the key of `gear` is not included in the `productKeys` array and value never logged

### Guarding against unexpected behaviour

```javascript
var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

var otherProducts = Object.create(products);
otherProducts["wheel"] = 210;

var otherProductKeys = Object.keys(otherProducts);
console.log("otherProductKeys: ", otherProductKeys);
  // logs otherProductKeys:  [ "wheel" ]

for (var i = 0; i < otherProductKeys.length; i += 1) {
  var key = otherProductKeys[i];
  console.log(key + " : " + otherProducts[key]);
}
  // logs "wheel: 210"
```

* New variable `otherProducts` has `products` object as prototype
* A new property `wheel` is added to the `otherProducts` object
* But behaviour is unexpected when using a `for..in` loop

```javascript
var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

var otherProducts = Object.create(products);
otherProducts["wheel"] = 210;

for (var product in otherProducts) {
  console.log(product + " : " + otherProducts[product]);
}
  // logs "wheel: 210", widget : 400", "crank : 375", "lever : 870"
```
* This logs all properties on `otherProducts` and all those from prototype
* Need to set up a conditional clause to only act on given property is directly owned by object in question

```javascript
var products = { 
  "widget": 400,
  "gear": 80,
  "crank": 375,
  "lever": 870,
};

var otherProducts = Object.create(products);
otherProducts["wheel"] = 210;

for (var product in otherProducts) {
  if (otherProducts.hasOwnProperty(product)) {
    console.log(product + " : " + otherProducts[product]);
  }
}
  // logs "wheel: 210"
```



