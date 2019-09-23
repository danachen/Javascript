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