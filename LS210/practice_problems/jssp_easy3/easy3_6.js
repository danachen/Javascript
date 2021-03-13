// Palindromic number

// Input: number, output: boolean
// Check to see if a number reads the same forward and backward
// Can probably use the same two methods as the string palindrome
// But first convert the number into a string to manipulate

// Method 1: create a new string but looping through the number backwards, compare new and old strings
// Method 2: construct two loops and compare first and last chars till one reaches mid-point
// Method 3: first find out 10^? the number is, so what's the largest base of 10 that can be divided into the number
// a function that initializes and assigns a counter to 1, then creates a loop that tracks if the remainder of the
// current number divided by 10 still yields something greater than 10
// the function would yield an integer that shows the power of base of 10

/*
I can then compare, e.g. 34543, by dividing by 10, and then an inner loop that divides by 10*4, 10,000
I then compare the remainder of 34543 % 10 => 3 (save the new num in variable named rightmostNum), and 34,543 / 10,000 = > 3
The next iteration, I take the rightmostNum = 3454, then find the remainder, 3454 % 10 => 4
Then the counter is down by 1 (the counter returned from the last function is 4, so it's now 3)
34,543 / 1,000 => 34, and since 34  > 10, 34 % 10 => 4 

So the loop woud be like

function basecount(inputNumber) {
  // figure out the largest base of 10 number
  var counter = 0;
  if (inputNumber / 10 > 10) {
    inputNumber /= 10;
    counter += 1; 
  }
  return counter;
}

function isPalindromicNumber(inputNumber) {
  for (var i = 0; i <= counter; i ++) {
    var rightmostNum = inputNumber / (10^(i + 1));
    var rightmostRemainder = inputNumber % (10^(i + 1));
    var leftmostRemainder = inputNumber % (10^(counter - i));
    if (leftmostRemainder > 10) {
      leftmostRemainder /= 10;
    }
    if (rightmostRemainder != leftmostremainder) {
      return false;
    }
  }
  return true;
}
*/

// The keeping the numbers as numbers version is tricky to process from the front and back. The front is tricky since we need to keep track of a current number
// to decrement and that it's under 10 so a proper remainder can be accessed to compare to the back

// Method 1: convert into string
// function isPalindrome(input) {
//   var inputLength = input.length;
//     var midPoint = Math.floor(inputLength / 2);
//     for (i = 0; i < midPoint; i++) {
//       if(input[i] !== input[inputLength - 1 - i]) {
//         return false;
//       }
//     }
//   return true;
// }

// function isPalindromicNumber(number) {
//   var numString = String(number);
//   return isPalindrome(numString);
// }

// Method 3: keeping the input as a number
// function basecount(inputNumber) {
//   // figure out the largest base of 10 number
//   var counter = 0;
//   for (var counter = 0; inputNumber > 10; counter += 1) {
//     inputNumber /= 10;
//   }
//   return counter;
//   // Math.pow(10, counter);
// }

// function isPalindromicNumber(inputNumber) {
//   var powerOf = basecount(inputNumber);
//   for (var powerOf; powerOf > 0; powerOf -= 1) {
//     var rightmostRemainder = inputNumber % Math.pow(10, basecount(inputNumber) - powerOf + 1);
//     var rightmostNum = Math.floor(inputNumber / Math.pow(10, basecount(inputNumber) - powerOf + 1));
//     // Problem is here: need to keep iterating through the rightmost and leftmost numbers until we're left with 1 digit
//     var leftmostRemainder = Math.floor(inputNumber / Math.pow(10, powerOf));
//     var leftmostNum = inputNumber % Math.pow(10, powerOf)
//     console.log(powerOf);
//     console.log(inputNumber);
//     console.log(rightmostRemainder);
//     console.log(rightmostNum);
//     console.log(leftmostRemainder);
//     console.log(leftmostNum);

//     if (rightmostRemainder !== leftmostRemainder) {
//       return false;
//     }
//   }
//   return true;
// }

// Further exploration: when the number starts with a 0
// Those are octal numbers, which means that even when using parseInt, the numbers are converted to octal
// But any user input should come in as a string, so this shouldn't be a real case problem

function isPalindrome(input) {
  var inputLength = input.length;
  console.log(input);
  console.log(inputLength);
    var midPoint = Math.floor(inputLength / 2);
    for (i = 0; i < midPoint; i++) {
      if(input[i] !== input[inputLength - 1 - i]) {
        console.log(input[i]);
        console.log(input[inputLength - 1 - i]);
        return false;
      }
    }
  return true;
}

function isPalindromicNumber(number) {
  var numString = number.toString();
  console.log(numString);
  return isPalindrome(numString);
}

console.log(isPalindromicNumber(0345430));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true