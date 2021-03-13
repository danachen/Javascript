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

function sumOrProduct(arr) {
  var sumOrProduct = prompt("Do you want the sum or the product? s for sum, and p for product");
  var resultSum = 0;
  var resultProduct = 1;

  const reducerSum = (accumulator, currentValue) => accumulator + currentValue;
  const reducerProduct = (accumulator, currentValue) => accumulator * currentValue;

  if (sumOrProduct === 's') {
    resultSum = arr.reduce(reducerSum);
     console.log(resultSum);
    } else if (sumOrProduct === 'p') {
     resultProduct = arr.reduce(reducerProduct);
      console.log(resultProduct);
    }
}

arr = [1, 2, 3, 4, 5];
sumOrProduct(arr);

/* 
The common idea of invoking reduce in both Ruby and Js is to invoke the method, and pass in an anonymous function or block.

In JS:
const sumReducer = (acc, n) => acc + n;
const productReducer = (acc, n) => acc * n;

[1, 2, 3, 4].reduce(productReducer); 
[1, 2, 3, 4].reduce(sumReducer);

or 

[1, 2, 3, 4].reduce((acc, n) => acc * n)`

In Ruby:

sum_proc = Proc.new { |acc, n| acc + n }
product_proc = Proc.new { |acc, n| acc * n }

[1, 2, 3, 4].reduce(&sum_proc)
[1, 2, 3, 4].reduce(&product_proc)

or

[1, 2, 3, 4].reduce { |acc, n | acc * n }
*/