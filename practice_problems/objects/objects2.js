/* 2. Literal Method: last line outputs? */

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);
console.log(person.firstName() + ' ' + person.lastName()); // The function needs to be firstName(), or lastName()

/* Just like functions, object literal methods must be called by appending parentheses 
(e.g., person.firstName()) in order to be executed. 
Function are first class objects, so referencing the function name without the parentheses 
would return the function itself, not the string representation:

```javascript
var hi = person.firstName;

hi;
// function () {
//   return 'Victor';
// }

// vs.

hi();
// "Victor"
```
*/

