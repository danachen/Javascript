// Reverse it 1

// Input: string; Output: string elements reversed

/* Approach 1:
- Break string down to array
- Construct new array backwards from old array
- Turn array back to string

Approach 2: 
- Use a reverse function for array instead of constructing new array manually
*/

function reverseSentence(input) {
  return input.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"