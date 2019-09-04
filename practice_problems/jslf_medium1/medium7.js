// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

// invoiceTotal(20, 30, 40, 50);          // works as expected
// invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

function invoiceTotal(...args) {
  var total = 0;
  for (input in args) {
      total += args[input];
  }
  return total;
}

console.log(invoiceTotal(20, 30, 40, 50));
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));

// Another solution

function invoiceTotal() {
  var total = 0;
  var i;

  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }
  return total;
}