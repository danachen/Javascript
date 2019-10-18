// Cute Angles

// Input: floating point number (angle between 0 and 360)
// Output: angle in degrees, minutes, seconds
// String processing by adding symbols in between the number

// Example: 76.73 => 76°43'48"
// 0.73 * 60 = 43.80 => 0.8 * 60 => 48
// So the algorithm should be such that it takes the decimal point of the number
// time that by 60 to get the degrees. If there's still left over, x by 60 to get the seconds

// To find the decimal, find the difference between the number itself and Math.round()
// Take the remainder, and x it by 60 and this is the minutes. If there's a remainder (so if the new remainder - Math.round(remainer) is not 0)
// Then time the remainder by 60 again and this is the seconds.
// String together the degree, minutes, and seconds, and add the symbols in between.

function padZeros(input) {
  if (String(input).length == 1) {
    return '0' + String(input);
  } else {
    return input;
  }
}

function dms(input) {
  var degree = Math.floor(input);
  var minutes = (input - degree) * 60;
  var seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
  return (Math.floor(degree) + "°" + padZeros(Math.floor(minutes)) + "'" + padZeros(seconds));
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"