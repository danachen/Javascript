/* Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will put in numbers.
*/

billAmount = parseFloat(prompt("What's the amount of the meal? "));
tipRate = parseFloat(prompt("What % would you want to tip? "));

tip = billAmount * tipRate / 100;
totalBill = tip + billAmount;
console.log("The tip is " + tip);
console.log("The total amount of the meal is " + totalBill);


// In case there's decimals involved

billAmount = parseFloat(prompt("What's the amount of the meal? "));
tipRate = parseFloat(prompt("What % would you want to tip? "));

tip = billAmount * tipRate / 100;
totalBill = tip + billAmount;
console.log("The tip is " + tip.toFixed(2));
console.log("The total amount of the meal is " + totalBill.toFixed(2));