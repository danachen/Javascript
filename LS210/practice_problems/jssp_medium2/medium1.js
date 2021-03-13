// Write a function that takes a string, and returns an object containing the following three properties:
// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

function letterPercentages(input) {
  var output = {lowercase: 0, uppercase: 0, neither: 0};
  var totalLength = input.length;

  input.split('').map(function(char) {
    if (/[^a-z]/i.test(char)) {
      output.neither += 1;
    } else if (char == char.toLowerCase()) {
      output.lowercase += 1;
    } else if (char == char.toUpperCase()) {
      output.uppercase += 1;
    };
  });
  
  Object.keys(output).map(function(key, value) {
    output[key] = (output[key] / totalLength * 100).toFixed(2);
  });

  return output;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }