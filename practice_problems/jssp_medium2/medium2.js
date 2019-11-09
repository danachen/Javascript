// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the 
// length of the longest side, and every side must have a length greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, 
// and returns one of the following four strings representing the triangle's classification: 
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

function triangle(sideOne, sideTwo, sideThree) {
  var biggestSide = [sideOne, sideTwo, sideThree].sort()[2];
  var smallerSides = [sideOne, sideTwo, sideThree].sort().slice(0, 2)
  var sumSmallerSides = smallerSides.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sideOne == 0 || sideTwo == 0 || sideThree == 0 || sumSmallerSides <= biggestSide ) {
    return 'invalid';
  } else {
    if (sideOne == sideTwo && sideOne == sideThree && sideTwo == sideThree) {
      return 'equilateral';
    } else if (sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"