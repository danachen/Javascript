/*
Write a function that takes a positive integer, n, as an argument, 
and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) 
should have one end at the lower-left of the triangle, and the other end at the upper-right.
Approach 1: draw a triangle with input integer n, in a size of n x n
- the last row is full
- from the first row: " ".repeat(row.length - 1) + "*" (index + 1)
- second row: " ".repeat(row.length - 2) + "*" (index + 2)
- the number from each row is determined by its index + 1
*/

function triangle(input) {
  var index = 1;
  var starMark = "*";
  var blankMark = " ";

  while(index <= input) {
    console.log(blankMark.repeat(input-index) + starMark.repeat(index));
    index += 1;
  }
}

// Using the padStart() method
function triangle(n) {
  for(var i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i).padStart(n));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********