/*
Write a function that will take a short line of text, and write it to the console log within a box.
Examples:
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
*/

// function logInBox(input) {
//   topBottom = '+' + '-'.repeat(input.length + 2) + '+';
//   middleRow = '| ' + input + ' |';
//   fillerRows = '|' + ' '.repeat(input.length + 2) + '|';

//   output = topBottom + '\n' + fillerRows + '\n' + middleRow + '\n' + fillerRows + '\n' + topBottom;
//   console.log(output);
// }

// TRUNCATING MESSAGE IF IT DOESN'T FIT
function trucateMessage(input, messageLength) {
  if (input.length > messageLength) {
    input = input.substring(0, messageLength - 1);
  }
  return(input);
}

function logInBox(input, messageLength) {
  input = trucateMessage(input, messageLength)
  topBottom = '+' + '-'.repeat(input.length + 2) + '+';
  middleRow = '| ' + input + ' |';
  fillerRows = '|' + ' '.repeat(input.length + 2) + '|';

  output = topBottom + '\n' + fillerRows + '\n' + middleRow + '\n' + fillerRows + '\n' + topBottom;
  console.log(output);
}

// WRAPPING THE MESSAGE AROUND IF IT DOESN'T FIT
/*
First break the string up in an array of strings of max length
Then loop through the array
Using if ... else if, add the appropriate borders for each line
For the last element in the array, calculate the empty spaces that need to be added
- For top and bottom lines, same as before
- For second top and second to bottm lines, also same as before
- the loop should only be concerned about the lines that hold text
- So for each line, the left border + text + right border
- For last line, the left border + text + empty space + right border, where empty space (int) is calculated
by taking max length - length of string
*/

logInBox('To boldly go where no one has gone before.', 20);
logInBox('', 0);