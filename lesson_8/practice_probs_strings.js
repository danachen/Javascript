// Practice Problems: Strings
// Strings Prob 1
var firstName = 'Dana';
var lastName = 'Chen';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// String 2
console.log(firstName.concat(' ' + lastName));

// String 3
var nameArr = fullName.split(' ');
console.log(nameArr);

// String 4
var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

// String 5
var charCode = language.charCodeAt(idx);
console.log(charCode);

// String 6
console.log(String.fromCharCode(charCode));

// String 7
console.log(language.lastIndexOf('a'));

// String 8
var a = 'a';
var b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

// String 9
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

// String 10
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

// String 11
var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

// String 12
console.log(fact1[0]);
console.log(fact2[0]);

// String 13
var pi = 22/7;
console.log(pi.toString().lastIndexOf('14'));

// String 14
var boxNumber = 365..toString();
console.log(boxNumber);

// String 15
console.log(typeof(parseInt(boxNumber)).toString());

// String 16
const readline = require('readline-sync');
let name = readline.question('What is your name? ');

if(name[name.length - 1] == '!') {
  console.log(`hello ${name}. why are we screaming`.toUpperCase());
} else {
  console.log(`Hello ${name}.`);
}