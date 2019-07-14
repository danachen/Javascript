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

logInBox('To boldly go where no one has gone before.', 20);
logInBox('', 0);