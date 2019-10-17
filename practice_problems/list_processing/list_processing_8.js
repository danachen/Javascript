// Grocery list

function buyFruit(arr) {
  var newArr = [];
  arr.forEach(function(innerArr) {
    for (i = 0; i < innerArr[1]; i++) {
      newArr.push(innerArr[0]);
    }
  });
  return newArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]