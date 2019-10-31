// A plus must always be followed by a minus
// Filter just for brackets, if open then add 1, if close then subtract 1, the end must be 0

function isBalanced(str) {

  var strArr = str.split('');
  var sum = 0;

  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] == '(') {
      sum += 1;
    } else if (strArr[i] == ')') {
      sum -= 1;
      if (sum < 0) {
        return false;
      }
    } 
  }
  return sum == 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false