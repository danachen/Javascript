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