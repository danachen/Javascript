// Sort

// Example
// function compareScores(score1, score2) {
//   if (score1 < score2) {
//     return 1;
//   } else if (score1 > score2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// var scores = [5, 88, 50, 9, 60, 99, 12, 23];
// console.log(scores.sort(compareScores));            // [ 5, 9, 12, 23, 50, 60, 88, 99 ]
// console.log(scores);                                // mutated to [ 5, 9, 12, 23, 50, 60, 88, 99 ]

// Example, sort student grades from lowest to highest; to sort from highest to lowest, change the signs

var studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return -1;
  } else if (student1.grade > student2.grade) {
    return 1;
  } else {
    return 0;
  }
}

console.log(studentGrades.sort(compareGrades));