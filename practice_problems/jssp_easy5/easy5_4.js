// Get middle char

// Input: string; Output: middle character(s) of string
// If odd length, return 1, if even length, return 2

/*
Approach 1:
- Test if the string length is even or odd
- If it's odd, then take the Math.floor(num.length/2 - 1) character
- If it's even, then take the above beginning index, plus one
- Can probably use the Array.substr(beginning index, 2) method

Approach 2:
- If the Array.length/2  == Math.floor(Array.length/2), then it's an even number
- Then we can just grab either of these conditions and plus one
- Otherwise we grab just the first character 
*/

// Stuck, but strSize and midPoint need to be two different variables

function centerOf(input) {
  var strSize = input.length;
  var midPoint = Math.floor(strSize / 2);
  if (strSize % 2 == 0) {
    return input.substr(midPoint - 1, 2);
  } else {
    return input[midPoint];
  }
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"