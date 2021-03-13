/*
Build a program that asks a user for the length and width of a room in meters, 
and then logs to the console the area of the room in both square meters and square feet.
Note: 1 square meter == 10.7639 square feet
*/
var choice = prompt("Do you want to give the measurement in feet or meters? f for foot, and m for meters: ")
var length = prompt("What's the length of the room? ")
var width = prompt("What's the width of the room? ")
var area;
var unitName;

if (choice == 'm') {
  area = parseFloat(length * width).toFixed(2);
  unitName = ' meters'
} else if (choice == 'f') {
  area = parseFloat(length * width).toFixed(2);
  unitName = ' feet'
}

console.log("The area of the room is " + area + unitName);
