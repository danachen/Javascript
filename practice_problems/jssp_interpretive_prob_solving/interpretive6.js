// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that 
// is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

function star(lines) {
  var stars = '';
  var inBetweenSpace = (lines - 3) / 2;
  var middleRow = '*'.repeat(lines);
  
  for (i = 0; i < Math.floor(lines/2); i++) {
    var frontSpace = i;
    var starsPerLine;
    starsPerLine = ' '.repeat(frontSpace) + '*' + ' '.repeat(inBetweenSpace);
    stars += starsPerLine + '*' + starsPerLine.split('').reverse().join('') + '\n';
    inBetweenSpace -= 1;
  }

  stars += middleRow + stars.split('').reverse().join('');
  return stars;
}

console.log(star(7));
/* logs
*  *  *  // * + ' ' * 2 + * + ' ' * 2 + * (1 star, 2 spaces, 1 star, 2 space, 1 star)
 * * *   // ' ' + * + ' ' + * + ' ' + * + ' ' (1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space)
  ***    // ' ' * 3 + * x 3 + ' ' * 3 (2 spaces, 3 stars, 2 spaces)
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