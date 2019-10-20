// How Many
// Input: number of occurrences of each element; Output: a hash of unique strings and occurrences, console printed

/*
- similar to a previous problem, a method like #each_with_object would've been perfect
- but for JS, create a new hash, then step through the array
function counterFunc (el of vehicles) {
  newHash[el] += 1;
  return newHash;
}

function countOccurrences(vehicles) {
  var newHash = counterFunc(vehicles);

  // Need to find a way to go through a property and print out the keys + "=>" and values
}
*/

// trick is to have another method that logs the results explicitly

function logResults(inputHsh) {
  for (key in inputHsh) {
    console.log(key + " => " + inputHsh[key]);
  }
}

function countOccurrences(vehicles) {
  var resultHsh = {};
  vehicles.forEach(function(vehicle) {
    if (resultHsh[vehicle]) {
    resultHsh[vehicle] += 1;
    } else {
      resultHsh[vehicle] = 1;
    }
  });
  logResults(resultHsh);
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2