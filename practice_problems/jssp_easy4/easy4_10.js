// Array Average

// Input: takes array as argument; Output: average of all integers in array, rounded down

// Sum up all the numbers in the array using an iterator, is there a #sum function? Then divide by length

function average(arr) {
  var sum = arr.reduce(function(accum, el) {
    return accum += el;
  });
  return Math.floor(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40