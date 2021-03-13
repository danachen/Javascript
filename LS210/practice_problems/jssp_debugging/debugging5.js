function range(start, end) {
  var range = [];
  if (arguments.length == 1) {
    end = start;
    start = 0;
  }
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));