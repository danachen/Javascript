function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

function multiply(left, right) {
  return left * right
}

let firstNum = getNumber ("Input the first number! ");
let secondNum = getNumber ("Input the second number! ");

console.log(`${firstNum} times ${secondNum} is ${multiply(firstNum, secondNum)}!`);
