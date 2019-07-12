/*
Write a program that asks the user to enter an integer greater than 0, then asks if the user wants 
to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
Note that only functions return values
*/

function sumOrProduct() {
  var highNumber = Number(prompt("Please enter an integer greater than 0: "));
  var sumOrProduct = prompt("Do you want the sum or the product? s for sum, and p for product");
  var resultSum = 0;
  var resultProduct = 1;

  for(i = 1; i <= highNumber; i++) {
    if (sumOrProduct === 's') {
      resultSum += i;
      
    } else if (sumOrProduct === 'p') {
      resultProduct *= i;
    }
  }

  if (sumOrProduct === 's') {
    return(resultSum);
  } else if (sumOrProduct === 'p') {
    return(resultProduct);
  }
}

sumOrProduct();

/* Further exploration
What if the input was an array of integers instead of just a single integer? 
How would your computeSum and computeProduct functions change? 
Given that the input is an array, how might you make use of the Array.prototype.reduce() method?
*/

 