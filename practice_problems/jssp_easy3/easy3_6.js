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

So the loop woud like like

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