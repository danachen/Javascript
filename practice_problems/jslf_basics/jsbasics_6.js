// Console input
var input = prompt('Enter a word: ');
var numberOfChars = input.length;
console.log('There are ' + numberOfChars + ' characters in ' + input);


// Allow console to ingest input
var rlSync = require('readline-sync');
var str = rlSync.question('Enter a phrase: ');
var numOfChars = str.replace(/\s/g, '').length;
console.log(numOfChars);
