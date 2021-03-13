// Total square area

// Input: array of arrays, each representing rectangles with width and length given (2 arguments)
// Output: a sum of products of each subarray
// Approach: iterate over the array, use map to find product of each array, then iterate again and find sum of all elements


// function totalArea(arrOfRectangles){
//   var sum = 0;
//   arrOfRectangles.forEach(function(rectangle) {
//     sum += rectangle[0] * rectangle[1];
//   }) 
//   return sum;
// }

// Or, if we want to separate out the map and reduce functions

function totalArea(rectangles) {
  var areas = rectangles.map(function (rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function (sum, area) {
    return sum + area;
  });
}

// var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
// console.log(totalArea(rectangles));    // 141

// Calculate only those that are squares

function totalSquareArea(arrOfRectangles) {
  var squares = arrOfRectangles.filter(function(el) {
    return el[0] === el[1];
  });
  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121