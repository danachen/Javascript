// How old is Teddy?

// Build a program that randomly generates Teddy's age, and logs it to the console. 
// Have the age be a random number between 20 and 200 (inclusive).

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Teddy is ' + getRandomInt(20, 200) + ' years old!');

// The rando number generated is between 0 and 1
// This is then applied to the max and min numbers

/*
It might be tempting to use Math.round() to accomplish that, 
but doing so would cause your random numbers to follow a non-uniform distribution, which may not be acceptable for your needs.

As you might have expected, 20 and 200 occur half as frequently as the numbers between them. 
This is because the two numbers on the ends of the range can only be rounded to from one direction 
(20.49 - 20.01 rounds to 20 & 199.5 to 200.01 rounds to 200). 
All the numbers in between can be rounded to from numbers above AND below their value. 
(20.5 - 21.49 rounds to 21).
*/

function randomBetween(min, max) {
  // return Math.round(Math.random() * (max - min)) + min;
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function between20And200() {
  return randomBetween(20, 200);
}

function trackRandom(times, func) {
  var results = {};
  var num;
  for (var i = 0; i < times; i++) {
    num = func();
    results[num] = results[num] || 0;
    results[num]++;
  }

  return results;
}

console.log(trackRandom(1000000, between20And200));