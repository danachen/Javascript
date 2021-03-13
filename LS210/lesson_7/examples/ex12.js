// Functional abstractions on objects

// Ex 1: Extracting the keys of an object to iterate over
// var myObject = { a: 1, b: 2, c: 3 };

// Object.keys(myObject).forEach(function (key) {
//   console.log('key: ' + key + ', value: ' + myObject[key]);
// });

// Ex 2: Working only with key or values
// var myObject = { a: 1, b: 2, c: 3 };
// var keys = Object.keys(myObject);                 // ["a", "b", "c"]
// var values = Object.keys(myObject).map(function (key) {
//   return myObject[key];
// });

// console.log(values); [1, 2, 3]

// Ex 3: Picking an iterator to work with, in this case, each object value is doubled
// function doubleObjectValues(object) {
//   var newObject = {};
//   Object.keys(object).forEach(function (key) {
//     newObject[key] = object[key] * 2;            // side effect
//   });

//   return newObject;
// }

// doubleObjectValues({ a: 1, b: 2, c: 3 });    //{ a: 2, b: 4, c: 6 }, returns new object

// Ex 4: Filter for even numbers, values are filtered
// function keepEvenValues(object) {
//   var newObject = {};
//   Object.keys(object).forEach(function (key) {
//     if (object[key] % 2 === 0) {
//       newObject[key] = object[key];              // side effect
//     }
//   });

//   return newObject;
// }

// keepEvenValues({ a: 1, b: 2, c: 3 });            // { b: 2 }, returns new object

// Ex 5: reducing an object

function getTotalFromInvoice(invoice) {
  var total = { total: 0 };
  Object.keys(invoice).forEach(function (key) {
    total.total += invoice[key];                 // side effect
  });

  return total;
}

getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 }); // returns { total: 21000 }
