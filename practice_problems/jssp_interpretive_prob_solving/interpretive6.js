// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that 
// is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).
// each line is $lines wide, and $lines high
// for each line, *xx*xx*
// each line starts with the * based on its index, 1st line starts with a * on index 0
// each line only has Math.floor($line/2) *
// the spaces are calculated by (7 - 0 - 3) / 2
// * + space * 2 + * + space ** 2 + *
// space + * + space + * + space + * + space
// space * 2 + *** + space * 2
// * x lines



function star(lines) {

}


console.log(star(7));
/* logs
*  *  *  // * + ' ' * 2 + * + ' ' * 2 + * (1 star, 1 space, 1 space, 1 star, 1 space, 1 space, 1 star)
 * * *   // ' ' + * + ' ' + * + ' ' + * + ' ' (1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space)
  ***    // ' ' * 3 + * x 3 + ' ' * 3 (1 space, 1 space, 1 star, 1 star, 1 star, 1 space, 1 space)
*******
  ***
 * * *
*  *  *
*/

console.log(star(9));
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/