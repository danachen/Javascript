/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:
1. The indexOf() function searches for the first instance of a substring in firstString that matches the string secondString, 
and returns the index of the character where that substring begins.
2. The lastIndexOf() function searches for the last instance of a substring in firstString 
that matches the string secondString, and returns the index of the character where that substring begins.
3. Both functions return -1 if firstString does not contain the substring specified by secondString.

Input: two strings
Output: either the first time, or the last time the second string shows up in the first string (as a word, not a char)
*/

function indexOf(firstString, secondString) {
    firstStringArr = firstString.split(" ")
    
    for (i = 0; i <= firstStringArr.length - 1; i++) {
      if (firstStringArr[i].slice(0, secondString.length) === secondString) {
        return (firstString.indexOf(firstStringArr[i][0]));
      }
    }
    return (-1);
}

// indexOf('Some strings', 's');                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1

function lastIndexOf(firstString, secondString) {
  var lastStringArr = firstString.split(" ")
    for (i = lastStringArr.length - 1; i >= 0; i--) {
      var countingBackwards = 0;
      if (lastStringArr[i].slice(0, secondString.length) === secondString) {
        var position = firstString.length - secondString.length - countingBackwards
        return(position);
      } else {
        countingBackwards += lastStringArr[i].length + 1;
      }
    }
    return(-1);
}

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

// Further exploration: implement lastIndexOf using indexOf
// Prob 1: how to ensure the functions all matches
// Prob 2: current implementation takes the match from beginning of firstString, what if the secondString starts in the middle
function lastIndexOf(firstString, secondString) {
  indexOf(firstString, secondString)
}