## Notes on Arrays

# Ways to declare an array
```javascript
[]  // empty array
[0, 1, 2] // holding some values
[23, 'hello', false, [1, 2], [true, 'hello']] // holding any other object

var count = new Array(1, 2, 3) // using the `Array` constructor
var count = [1, 2, 3] // the above, but more commonly seen
```

## Ways to interact with an array

* Count the length
```javascript
var count = [1, 2, 3];
count.length;
```

* Run code for each element
```javascript
var count = [1, 2, 3, 4]
var i;
for (i = 0; i < count.length; i += 1) {
  console.log(i); // or to access the content of the array, `console.log(count[i];)`
}
```

## Accessing, modifying, detecting values
```javascript
var count = [1, 2, 3]
count[5] = [1, 2, 3, undefined, undefined, 5]; // the skipped values are undefined
count.length // this is 6
count.length = 4 // we can reassign the length
count; //[1, 2, 3, undefined], the rest are truncated
```
## Arrays as objects
```javascript
typeof [];  // object
Array.isArray([]);        // true
Array.isArray('array');   // false
```
