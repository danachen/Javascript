/* 
Write a function logMultiples that takes one argument number. 
It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. 
Log the values in descending order.
You may assume that number is an integer between 0 and 100.
*/

/* If int = 5, 10, 15, 20, 25, till it's 100 */

function logMultiples(int) {
  for (i = 1; i <= 100/int; i++) {
    if ((int * i) % 2 != 0) {
      console.log(int * i);
    }
  }
}

logMultiples(5);
