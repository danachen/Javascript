// Name swapping
// Input: string; Output: string formatted

/*
Approach: split by space, and then reverse
- Split string into array
- Construct a new string by adding second element of array, plus ',', plus first el of array
*/

function swapName(name) {
  var nameArr = name.split(' ');
  return nameArr.reverse().join(', '); 
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"