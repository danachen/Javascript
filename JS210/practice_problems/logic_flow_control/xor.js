/* Write a function named isXor that takes two arguments, 
and returns true if exactly one argument is truthy, false otherwise. 
Your function should work with the boolean values of true and false, 
but also any JavaScript values based on their "truthiness". */

function xor(a, b) {
  if ((a === true && b ===  false) || (a === false && b === true)) {
    return true;
  } else {
    return false;
  }
}

xor(false, false);


// A more concise version

function xor(a, b) {
  return !!((a === true && b ===  false) || (a === false && b === true))
}

xor(false, false);