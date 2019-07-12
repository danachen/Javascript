/* 
Implement a function that determines whether a string begins with another string. 
If it does, the function should return true, or false otherwise. 

Have a boolean var to track true or false
Loop over both strings at the same time, keep the var at true if identical
Otherwise, return false
*/

function startsWith(string, searchString) {
  var trackState;
  for(i = 0; i <= searchString.length - 1; i++) {
    if (string.length < searchString.length) {
      return false;
    } else if (string[i] === searchString[i]){
      trackState = true;
    } else if (searchString === '') {
      trackState = true;
    } else {
      return false;
    }
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

// No need to check explicitly for all edge cases if they are covered implicitly
function startsWith(string, searchString) {
  var i;
  for (i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}