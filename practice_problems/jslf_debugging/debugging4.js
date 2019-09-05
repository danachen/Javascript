// function wantToVisit(museum, city) {
//   return museum.includes('Computer')
//       || museum.includes('Science')
//       || museum.includes('Andy Warhol')
//       || city === 'Amsterdam' && museum.includes("Modern")
//       && !(museum.includes('Modern') && museum.includes('Art') && !(museum.includes('Andy Warhol')) && !(museum.includes('Modern')))
// }

// // or

// function wantToVisit(museum, city) {
//   return  museum.includes('Computer') ||  museum.includes('Science') ||  
//           (museum.includes('Modern') && museum.includes('Art') && (museum.includes('Andy Warhol') || city === 'Amsterdam'));
// } // modern art + andy warhol, or modern art + amsterdam

// // Tests (should all print 'true')

// console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);

// /* 
// Operator precedence
// !	High
// &&	Medium
// ||	Low
// A || B && C	means	A || (B && C)
// A && B || C && D	means	(A && B) || (C && D)
// A && B && C || D	means	((A && B) && C) || D
// !A && B || C	means	((!A) && B) || C
// */

function contains(string, substring) {
  return string.toLowerCase().match(substring.toLowerCase()) != null;
}

function wantToVisit(museum, city) {  
  var aboutComputers = contains(museum, 'Computer');
  var aboutScience = contains(museum, 'Science');
  var aboutModernArt = contains(museum, 'Modern') && contains(museum, 'Art');
  var aboutAndyWarhol = contains(museum, 'Andy Warhol');
  var inAmsterdam = city === 'Amsterdam';

  var mustGo =  aboutComputers || aboutScience;
  var worthAnException = aboutModernArt && (aboutAndyWarhol || inAmsterdam);

  return mustGo || worthAnException;
}

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
