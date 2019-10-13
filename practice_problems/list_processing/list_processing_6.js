// All substrings

function substrings(str) {
  var reducer = (accumulator, currentEl) => accumulator + currentEl;
  var strArr = str.split('');
  var substringArr = [];
  for (i = 0; i < strArr.length; i++) {
    for (j = i; j < strArr.length; j++) {
      substringArr.push(strArr.slice(i, j+1).reduce(reducer));
    }
  }
  return substringArr;
}

// Using return function to directly return the results
function substringsAtStart(string) {
  return string.split('').map(function (char, i) {
    return string.slice(0, i + 1)
  });
}

function substrings(string) {
  return string.split('').map(function (char, i) {
    return substringsAtStart(string.slice(i, string.length));
  }).flat();
}

console.log(substrings('abcde'));
/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/