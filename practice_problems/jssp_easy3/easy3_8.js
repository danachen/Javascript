// Letter Swap
// Input: string of words; output: swap the first and last words of EVERY word

/* 
- first turn string into an array
- iterate through each word
- while at each word, return a new string
- the problem is that strings are immutable, so it's not possible to mutate a string directly

Approach 1: 
- construct a new string, by first adding the last element of the old string to the new string, add index position
- 1 ... second last element of old string, then manually insert the first index element of the old string
- so three manual steps for each word in the string

Approach 2:
- break each individual word down to an array, of first element, middle portion, and last element
- then reverse string the new array from the broken down array

- both approaches will require a new string to be constructed from scratch
- both approaches will also require each individual word to be constructed from scratch
*/