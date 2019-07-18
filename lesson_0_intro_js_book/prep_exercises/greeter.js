// This is only the browser solution
// let name = prompt("What's your name?");
// console.log(`Hello ${name}!`);

// For running in node
// let readlineSync = require('readline-sync');
// let fname = readlineSync.question('What is your first name? ');
// let lname = readlineSync.question('What is your last name? ');
// console.log(`Hello ${fname} ${lname}!`);

// a function declaration
// greetPeople();

// function greetPeople() {
//   console.log('Good Morning');
// }

// a function expression
// let greetPeople = function() {
//    console.log('Good Morning');
// };

// greetPeople();

// arrow function
// let greetPeople = () => console.log('Good Morning!');
// greetPeople();

// using arrow function to make codes shorter
// Run this code in your browser

// let add = (a, b) => a + b;
// let getNumber = (text) => {
//   let input = prompt(text);
//   return Number(input);
// };

// let number1 = getNumber('Enter a number: ');
// let number2 = getNumber('Enter another number: ');
// console.log(add(number1, number2));


// solicit names in separate invocations

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName ('What is your first name? ');
let lastName = getName ('What is your last name? ');

console.log(`Hello ${firstName} ${lastName}!`);