/* Methods used:
new Date()
Date.getDay()
Date.getDate()
Date.getTime()
Date.getMonth()
Date.getFullYear()
Date.setDate()
*/

/* Create variable named today with current date and time as its value */
// var today = Date(today);
// // Or, var today = new Date();
// console.log(today);

/* Log a string, "Today's day is 5" */
// var today = new Date();
// var day = today.getDay();
// console.log("Today's day is " + day);

/* Modify last problem to show 3-letter day name abb*/
// var today = new Date();
// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = today.getDay();
// console.log("Today's day is " + daysOfWeek[day]);

/* 4. Add calendar date to log message*/
// Date.getDay() gets the current day of week
// Date.getDate() gets the day of the month
// var today = new Date();
// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = today.getDay() - 1;
// console.log(day);
// console.log("Today's date is " + daysOfWeek[day] + ", the " + (today.getDate() - 1) + "th");

/* 5. Write a function named dateSuffix that takes the day of month as a numeric 
value and returns the formatted day of month and suffix. */
// var today = new Date();
// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = today.getDay();

// function dateSuffix(day) {
//   daySuffixed = "";
//   if (day == 11 || day == 12 || day == 13) {
//     daySuffixed = day + 'th';
//   } else if (day == 1 || String(day)[String(day).length - 1] == 1) {
//     daySuffixed = day + 'st';
//   } else if (day == 2 || String(day)[String(day).length - 1] == 2) {
//     daySuffixed = day + 'nd';
//   } else if (day == 3 || String(day)[String(day).length - 1] == 3) {
//     daySuffixed = day + 'rd';
//   } else {
//     daySuffixed = day + 'th';
//   }
//   return daySuffixed;
// }

// console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));

/* 6. Change your output to include the value from the getMonth method. 
Thus, the logged string will read "Today's date is Mon, 11 6th", where 11 is the month number returned by getMonth.*/

// var today = new Date();
// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = today.getDay();
// var month = today.getMonth();

// function dateSuffix(day) {
//   daySuffixed = "";
//   if (day == 11 || day == 12 || day == 13) {
//     daySuffixed = day + 'th';
//   } else if (day == 1 || String(day)[String(day).length - 1] == 1) {
//     daySuffixed = day + 'st';
//   } else if (day == 2 || String(day)[String(day).length - 1] == 2) {
//     daySuffixed = day + 'nd';
//   } else if (day == 3 || String(day)[String(day).length - 1] == 3) {
//     daySuffixed = day + 'rd';
//   } else {
//     daySuffixed = day + 'th';
//   }
//   return daySuffixed;
// }

// console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' + month + ' ' + dateSuffix(today.getDate()));

/* 7. Make month more readable. */

// var today = new Date();
// var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var day = today.getDay();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var month = today.getMonth();

// function dateSuffix(day) {
//   daySuffixed = "";
//   if (day == 11 || day == 12 || day == 13) {
//     daySuffixed = day + 'th';
//   } else if (day == 1 || String(day)[String(day).length - 1] == 1) {
//     daySuffixed = day + 'st';
//   } else if (day == 2 || String(day)[String(day).length - 1] == 2) {
//     daySuffixed = day + 'nd';
//   } else if (day == 3 || String(day)[String(day).length - 1] == 3) {
//     daySuffixed = day + 'rd';
//   } else {
//     daySuffixed = day + 'th';
//   }
//   return daySuffixed;
// }

// console.log("Today's date is " + daysOfWeek[day] + ', ' + months[month] + ' ' + dateSuffix(today.getDate()));

/* 8. Reformat the console call */
// var today = new Date();
// var day = today.getDay();

// function dateSuffix(day) {  
//   daySuffixed = "";
//   if (day == 11 || day == 12 || day == 13) {
//     daySuffixed = day + 'th';
//   } else if (day == 1 || String(day)[String(day).length - 1] == 1) {
//     daySuffixed = day + 'st';
//   } else if (day == 2 || String(day)[String(day).length - 1] == 2) {
//     daySuffixed = day + 'nd';
//   } else if (day == 3 || String(day)[String(day).length - 1] == 3) {
//     daySuffixed = day + 'rd';
//   } else {
//     daySuffixed = day + 'th';
//   }
//   return daySuffixed;
// }

// function formattedMonth() {
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   var month = today.getMonth();
//   return months[month];
// }

// function formattedDay() {
//   var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   return daysOfWeek[day];
// }

// function formattedDate() {
//   console.log("Today's date is " + formattedDay() + ', ' + formattedMonth() + ' ' + dateSuffix(today.getDate()));
// }

// formattedDate();

/* 9. Log the values returned from the getFullYear and getYear methods. 
Note how these values differ. 
Note especially that getYear is deprecated: you should avoid using deprecated methods as they may one day disappear.
*/
// var today = new Date();
// console.log(today.getFullYear());
// console.log(today.getYear());

// 10. Use the getTime method and log the current date and time in total milliseconds since Jan. 1st 1970.
// var sinceThen = new Date('Jan 1, 69 00:20:18 GMT+00:00');
// console.log(sinceThen.getTime());

/* !11. Create a new date object variable named tomorrow that contains a Date object. 
Initialize the variable by setting it to the value of today. 
You can get the value of today using the getTime method. 
Next, change the date on the tomorrow object to the day after today: you should use setDate to change the date. 
Finally, log the tomorrow object with your formattedDate function. */

// function dateSuffix(day) {  
//   daySuffixed = "";
//   if (day == 11 || day == 12 || day == 13) {
//     daySuffixed = day + 'th';
//   } else if (day == 1 || String(day)[String(day).length - 1] == 1) {
//     daySuffixed = day + 'st';
//   } else if (day == 2 || String(day)[String(day).length - 1] == 2) {
//     daySuffixed = day + 'nd';
//   } else if (day == 3 || String(day)[String(day).length - 1] == 3) {
//     daySuffixed = day + 'rd';
//   } else {
//     daySuffixed = day + 'th';
//   }
//   return daySuffixed;
// }

// function formattedMonth() {
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   var month = today.getMonth();
//   return months[month];
// }

// function formattedDay() {
//   var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   return daysOfWeek[day];
// }

// function formattedDate() {
//   console.log("Today's date is " + formattedDay() + ', ' + formattedMonth() + ' ' + dateSuffix(today.getDate()));
// }

// var today = new Date();
// var day = today.getDay();

// New lines here
// var tomorrow = new Date(today.getTime());
// console.log(today);
// console.log(tomorrow);
// console.log(tomorrow.getDate());
// tomorrow.setDate(today.getDate() + 1);
// formattedDate(tomorrow);

/* Creating a date object:
JavaScript has four (4) ways to create a date object:

1. new Date();
2. new Date(value);
3. new Date(dateString);
4. new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
Passing in the date object directly also works (e.g., new Date(today)). 
However, this employs implicit coercion which we don't recommend.
 Using the Date.prototype.getTime() method makes it clear what is going on.
*/

/* 12. Create a new variable named nextWeek that is a new Date copied from the today object. 
Compare nextWeek and today, and log the results. Are they equal? Why or why not? */

// var today = new Date();
// var nextWeek = today; // not the way to copy the object over
// var nextWeek = new Date(today.getTime());
// console.log(today == nextWeek); // returns false, not the same object

/* 13. The === operator only returns true with Date objects if the objects are the same object. 
Since we have two different objects (with the same values), we must instead compare the values represented by those objects. 
Compare the values returned by toDateString to determine whether the two objects are equal. 
Finally, add 7 days to the nextWeek date and compare the two objects again.
 */

// console.log(today.toDateString() === nextWeek.toDateString());
// nextWeek.setDate(today.getDate() + 7);
// console.log(nextWeek + 7);
// console.log(today.toDateString() === nextWeek.toDateString());

/* 14. Finally, write a function named formatTime that takes a date object as an argument 
and returns a string formatted with the hours and minutes as "15:30". 
Make sure you handle the case where the hours or minutes has only one digit: 
you need to pad the value with a leading zero in such cases, e.g., "03:04". 
You can use the getHours and getMinutes methods to obtain the hours and minutes. */

function formatTime(date) {
  hour = date.getHours();
  minute = date.getMinutes();
  console.log(String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0'));
}

var today = new Date();
var day = today.getDay();
formatTime(today);
