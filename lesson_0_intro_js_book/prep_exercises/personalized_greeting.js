//uses Node's built-in require function to import readline-sync into program
let rlSync = require('readline-sync');
// use rlSync to call the question method
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);

