// solution 1
var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(String(person) === String(otherPerson));    // false -- expected: true


// solution 2
var person = { name: 'Victor' };
var otherPerson = person;

console.log(String(person) === String(otherPerson));    // false -- expected: true

