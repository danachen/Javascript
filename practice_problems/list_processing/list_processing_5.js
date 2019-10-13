// Leading Substrings
// take a string as input
// output an array of substrings, consisting of each letter and the letter before

function substringsAtStart(str) {
  // define the reducer method to return strings
  var reducer = (accumulator, currentEl) => accumulator + currentEl;
  // split string into array
  var strArr = str.split('');
  // return a new array of substrings
  var substringArr = [];
  for (i = 0; i < strArr.length; i++) {
    // push each substring into the new array
    // each element of the new array is made up of substring sets put together
    // each subset of characters is pulled from the broken array and then put back together through the reducer method
    substringArr.push(strArr.slice(0, i+1).reduce(reducer));
  }
  return substringArr;
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]