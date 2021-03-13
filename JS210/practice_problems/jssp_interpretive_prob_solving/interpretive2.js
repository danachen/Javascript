// Write a function that displays a four-pointed diamond in an nxn grid, 
// where n is an odd integer supplied as an argument to the function. 
// You may assume that the argument will always be an odd integer.
// Need numbers that go up and then down again

function diamond(lines) {
  var drawDiamond = '';
  for (i = 1; i <= lines; i += 2) {
    var blank;
    if ((lines - i) / 2 < 0) {
      blank = 0;
    } else {
      blank = (lines - i) / 2;
    } ;
    drawDiamond += ' '.repeat(blank) + '*'.repeat(i) + ' '.repeat(blank) + '\n';
  }

  for (i = lines - 2; i > 0; i -= 2) {
    if ((lines - i) / 2 < 0) {
      blank = 0;
    } else {
      blank = (lines - i) / 2;
    };
    drawDiamond += ' '.repeat(blank) + '*'.repeat(i) + ' '.repeat(blank) + '\n';
  }
  return drawDiamond;
}

console.log(diamond(1));
/* logs
*
*/
console.log(diamond(3));
/* logs
 *
***
 *
*/
console.log(diamond(9));
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/ 