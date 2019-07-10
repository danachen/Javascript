/* 
If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
*/

// if (avgGrade >= 90) {
  //   console.log("A");
  // } else if (avgGrade >= 70) {
  //   console.log("B");
  // } else if (avgGrade >= 50) {
  //   console.log("C");
  // } else {
  //   console.log("D");
  // }

function studentGrade() {
  grade1 = parseInt(window.prompt('Enter the first grade: '));
  grade2 = parseInt(window.prompt('Enter the second grade: '));
  grade3 = parseInt(window.prompt('Enter the third grade: '));
  avgGrade = (grade1 + grade2 + grade3) / 3;

  grade = '';
  
  if (avgGrade >= 90) {
    grade = 'A';
  } else if (avgGrade >= 70) {
    grade = 'B';
  } else if (avgGrade >= 50) {
    grade = 'C';
  } else {
    grade = 'D';
  }
  console.log('Your grade is a ' + grade);
}

studentGrade();

// Modify to accept any number of scores
function gradeInput(input) {
  counter = 0;
  scoreArray = []
  while (counter <= input - 1) {
    scoreArray.push(parseInt(window.prompt('Enter a score: ')));
    counter += 1;
  }
  
  var total = 0;
  for (var i = 0; i <= input - 1; i++) {
    total += scoreArray[i];
  }
  return total / input;
}

function studentGrade() {
  input = parseInt(window.prompt('How many scores do you want to average?'));
  avgGrade = gradeInput(input);
  if (avgGrade >= 90) {
    grade = 'A';
  } else if (avgGrade >= 70) {
    grade = 'B';
  } else if (avgGrade >= 50) {
    grade = 'C';
  } else {
    grade = 'D';
  }
  console.log('Your grade is a ' + grade);
}

studentGrade();