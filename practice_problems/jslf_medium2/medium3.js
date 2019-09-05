var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) { // an annonymous function that takes two parameters
  return startingBalance + (item * quantity);
};

startingBalance = 5; // this var belongs to the global scope, and the var's value is dynamically looked up every time the function is called
// closures have functions retain access to var defined in an enclosing scope. As a result, this is not a pure function, given the same arguments, not the same value
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10; // closure means function retains access
console.log(totalPayable(chicken, chickenQuantity));