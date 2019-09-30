// When Will I Retire

// Prompt asks age
// Prompt asks when one would like to retire
// Console logs the current year and the year one will retire (age of retirement - current age + current year)
// Console logs you only have (age of retirement - current age) to go

// Need to remember how to accept and print out a console prompt

// let rlSync = require('readline-sync');
// var yourAge = rlSync.question('What is your age?\n');
// var retireAge = rlSync.question('At what age would you like to retire?\n');
// var currentYear = new Date().getFullYear();
// console.log(`It's ${currentYear}. You will retire in ${retireAge - yourAge + currentYear}`);

// To remember:
// first requiring rlSync
// storing the readline input into a variable
// get the current year by instantiating a new object from the Date class; new Date().getFullYear()

// Further exploration
// If today = Date(); instead of today2 = new Date();, then today is actually a string, while today2 is a Date object

var today = new Date();
var today2 = Date();
console.log(today); // 2019-09-28T09:29:04.794Z
console.log(today2); // Sat Sep 28 2019 11:29:04 GMT+0200 (Central European Summer Time)
console.log(typeof today); // object
console.log(typeof today2); // string