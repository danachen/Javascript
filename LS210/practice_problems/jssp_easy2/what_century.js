/* What Century is That
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
*/

function centuryNumber(input) {
  if (input % 100 === 0) {
    return (Number(input)/100);
  } else {
    return Math.floor((Number(input)/100)+1).toFixed(0);
  }
}
function century(input) {
  centuryNum = String(centuryNumber(input));
  switch(true) {
    case (centuryNum % 100 == 0 || centuryNum > 10 && centuryNum < 20):
    console.log(centuryNum + 'th');
    break;
    case (centuryNum % 100 == 1):
    console.log(centuryNum + "st");
    break;
    case (centuryNum % 100 == 2):
    console.log(centuryNum + "nd");
    break;
    case (centuryNum % 100 == 3):
    console.log(centuryNum + "rd");
    break;
    default:
    console.log(centuryNum + "th");
  }
}

century(2000);        // "20th", divide by 100
century(2001);        // "21st", divide by 100 + 1
century(1965);        // "20th", divide by 100 + 1
century(256);         // "3rd", divide by 100 + 1
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

