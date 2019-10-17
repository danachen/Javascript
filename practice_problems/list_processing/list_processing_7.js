// Palindromic Substrings
// Input: a string
// Output: an array of all substrings that are palindrome substrings
// First work on one string that represents one word, then put them all in a string to have an array of palindromes returned
// For each word, e.g. madam, the results are madam and ada, how to have two separate strings emerge from the word?
// Check each word's first and last letter, if they are the same, then keep the first letter and append the next one
// m, a, d, a, m, if m == m, then save m in a new string, if a = a, append a to the previous string
// then look at a, d, a, if a==a, then save a in a new string, if d == d, then append d to a, then add the previous element
// for each string, maybe first come up with all the subsets first, so abcd => ab, abc, abcd, bc, bcd, cd
// for madam => ma, mad, mada, madam, ad, ada, adam, da, dam
// then for each substring, check for palindromes
// three issues to fix: one to get rid of duplicates, the other is to split the word down, have two letter ones working
// one issue left: split the word down first
// done: remember that the Array.prototype.concat() method returns a new array, so need a way to catch that value

function substrings(str) {
  var reducer = (accumulator, currentEl) => accumulator + currentEl;
  var strArr = str.split('');
  var substringArr = [];
  for (i = 0; i < strArr.length; i++) {
    for (j = i; j + 1 < strArr.length; j++) {
      substringArr.push(strArr.slice(i, j+2).reduce(reducer));
    }
  }
  return substringArr;
}

function isPalindrome(str) {
  if (str.length % 2 == 0) {
    strFirst = str.substr(0, str.length / 2);
    strLast = str.substr(str.length / 2, str.length).split('').reverse().join('');
    return strFirst == strLast;
  } else {
    strFirst = str.substr(0, str.length / 2);
    strLast = str.substr(str.length / 2 + 1, str.length).split('').reverse().join('');
    return strFirst == strLast;
  }
}

function palindromes(str) {
  var eachString = str.split(' ');
  var substrs = [];
  eachString.forEach(function(str) {
    substrs = substrs.concat(substrings(str));
  });

  var palindromeArray = [];
  substrs.forEach(function(el) {
    // check each element, if it's a palindrome then insert it into the array
    if (isPalindrome(el)) {
      palindromeArray.push(el);
    };
  });
  return palindromeArray;
}
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/*returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/

console.log(palindromes('knitting cassettes'));
/* returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/