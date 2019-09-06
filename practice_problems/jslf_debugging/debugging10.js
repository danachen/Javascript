// var totalPages = 364;
// var energy = 100;
// var currentPage = 1;
// var cupsOfCoffee = 0

// function read() {

//   while (energy > 0 && currentPage < totalPages) {
//     currentPage += 1;
//     energy -= (5 + currentPage * 0.1);
//   }

//   console.log('Made it to page ' + String(currentPage) + '.');

//   // Drink a cup of coffee.
//   energy = 100;
//   cupsOfCoffee += 1;

//   // Continue reading.
//   if (currentPage < totalPages) {
//     read();
//   } else {
//     console.log('Done with ' + cupsOfCoffee + ' cups of coffee!');
//   }
// }

// read();

var newObj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
}

var newArr = [1, 2, 3, 4, 5];
newArr['new element'] = 'new element';

console.log(Object.keys(newObj).length);
console.log(newArr.length);
console.log(newArr);
