/*
Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).
*/

function cleanUp(input) {
  var regex = /[^a-zA-Z ]/g; // /[^a-z]+/gi
  var newString = input.replace(regex, '');
  return newString;
}

// Not using regex, the most straightforward interpretation
function cleanUp(text) {
  var cleanText = '';
  var i;

  for (i = 0; i < text.length; i += 1) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') { // this will only add ' ' once
      cleanText += ' ';
    }
  }
  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}


cleanUp("---what's my +*& line?");    // " what s my line "
