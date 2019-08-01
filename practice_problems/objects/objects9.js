/* After Midnight Part 1
The timeOfDay function below takes a time argument using this minute-based format, 
and returns the time of day in 24-hour format ("hh:mm"). 
Reimplement the function using JavaScript's Date object. 
Time of day in minutes: is inputTime
Calculate the number of hours: inputTime / 60 = hours
Calculate the number of minutes: inputTime % 60 = minutes
Then use padStart to pad both minutes and hours
*/

// function timeOfDay(input) {
//   const MINUTES_IN_DAY = 24 * 60;
//   const MINUTES_IN_HOUR = 60;
//   adjustedInput = input % MINUTES_IN_DAY;
//   if (adjustedInput < 0) {
//     var inputTime = MINUTES_IN_DAY + adjustedInput;
//     var hours = Math.floor(inputTime / MINUTES_IN_HOUR);
//     var minutes = inputTime % MINUTES_IN_HOUR;
//   } else {
//     var hours = Math.floor(adjustedInput / MINUTES_IN_HOUR);
//     var minutes = adjustedInput % MINUTES_IN_HOUR;
//   }
//   return (padding(hours.toString()) + ":" + padding(minutes.toString()));
// }

// function padding(time) {
//   if (time.toString().length < 2) {
//     return time.padStart(2, '0');
//   } else {
//     return time;
//   }
// }

// Official solution

// Leverage the Date.prototype.getTime method. 
// This method returns the value of the Date object in milliseconds format.
// Create a Date object set to midnight of an arbitrary day and stores it in the midnight variable. 
// Multiply the deltaMinutes argument by MILLISECONDS_PER_MINUTE to convert it to milliseconds, 
// then adds it to the milliseconds value returned by calling getTime() on midnight.
// Methods used: getTime(), getHours(), getMinutes()s

var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
// console.log(timeOfDay(35));         // "00:35"
// console.log(timeOfDay(-1437));      // "00:03"
// console.log(timeOfDay(3000));       // "02:00"
// console.log(timeOfDay(800));        // "13:20"
// console.log(timeOfDay(-4231));      // "01:29"