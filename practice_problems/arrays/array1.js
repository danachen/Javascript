var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// What does it log to the console at lines 5 and 8?

// Line 5: [1, 2, 3], pop is a mutating method
// Line 8: [1, 2], myOtherArray points to myArray

/* Solution

Logged at line 5: [1, 2, 3]
Logged at line 8: [1, 2, 3]

The value logged for myOtherArray at line 5 is the same value (i.e., the same array object) 
as the value of myArray. *This is because the value stored in the variable myArray is a reference 
to the location of the value and not the value itself.* Therefore, when the program pops a value 
from myArray, myOtherArray mirrors the change.

For line 8, the value of myOtherArray did not change because the *value of the reference stored in 
myArray on line 7 is now a different array object*. *Performing a reassignment operation changes the 
value stored to a reference of a value in a different location*. As a result of line 7, myArray and 
myOtherArray now have different (reference) values stored, so any future mutations of myArray will 
no longer affect myOtherArray and vice versa.

For example, here is what would happen if the program above were to continue in the following way:

myArray.pop();
console.log(myArray);         // [1]
console.log(myOtherArray);    // [1, 2, 3] -- not mutated
*/