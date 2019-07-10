/* 
Write a function that takes a positive integer as an argument, 
and logs all the odd numbers from 1 to the passed in number (inclusive). 
All numbers should be logged on separate lines.
*/

function oddNumber(int) {
  for (i=1; i<=int; i++) {
    if (i%2 != 0)
      console.log(i);
  }
}

oddNumber(10);

// Another approach, without explicitly testing for odd numbers

function oddNumber(int) {
  for (i=1; i<=int; i+=2) {
    console.log(i);
  } 
}

oddNumber(10);

// Another way to do it by checking for even numbers, then skipping it if it was even

function oddNumber(int) {
  for (i=1; i<=int; i++) {
    if (i%2 === 0) {
      continue; } else
      console.log(i);
  }
} 

oddNumber(10);
