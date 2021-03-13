// Reverse it part 2

// Input: string; output: certain string element is reversed

/* Approach: 
- Break down string into arrays
- New array constructed, using if, if > 5 chars, goes into another condition
- If less than 5 chars, just push it into the array
- In the other if branch, using for loop to string together a new string variable starting from the back
- Push that into the new array as well
- Turn arrach into string
*/

function reverseWords(input) {
  var inputArr = input.split(' ');
  var newArr = [];
  inputArr.forEach(function(word) {
    if(word.length <5) {
      newArr.push(word);
    } else {
      newArr.push(word.split('').reverse().join(''));
    }
  });
  return newArr.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"