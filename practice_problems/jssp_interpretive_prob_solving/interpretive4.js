// Write a function that implements the Caesar Cipher. 
// The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be 
// transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter 
// located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 
// 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. 
// The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). 
// Any other character is left as is. The substituted letters are in the same letter case as the original letter. 
// If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

function caesarEncrypt(input, key) {
  return input.split('').map(function(char) {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return String.fromCharCode(((char.charCodeAt() - 97) + key) % 26 + 97);
    } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return String.fromCharCode(((char.charCodeAt() - 65) + key) % 26 + 65);
    } else {
      return char;
    }
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
