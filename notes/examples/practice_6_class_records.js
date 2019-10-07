// Class record formatting

const EXAMS_WEIGHT = 0.65;
const EXERCISES_WEIGHT = 0.35;

function generateClassRecordSummary(scores) {
  var avgExamScores = calculateExamScores(scores);
  var totalExerciseScores = calculateExerciseScores(scores);
  var finalPercentGrades = calculateFinalGrade(avgExamScores, totalExerciseScores);
  var finalLetterGrades = returnFinalLetterGrades(finalPercentGrades);
  var examGrades = getExamGrades(scores);
  var examGradesAvg = getAvgGradePerExam(examGrades);
  var examGradesMax = getMaxGradePerExam(examGrades);
  var examGradesMin = getMinGradePerExam(examGrades);
  var studentGrades = getStudentGrades(finalPercentGrades, finalLetterGrades);
  var examSummary = getExamSummaryGrades(examGradesAvg, examGradesMax, examGradesMin);
  return gradeSummary(studentGrades, examSummary);
}

function gradeSummary(studentGrades, examSummary) {
  var finalReturn = {};
  finalReturn.studentGrades = studentGrades;
  finalReturn.exams = examSummary;
  return finalReturn;
}

function getExamSummaryGrades(avg, max, min) {
  var combinedExamGrades = [];
  for(i = 0; i < avg.length; i += 1) {
    var eachExam = {};
    eachExam.average = avg[i];
    eachExam.minimum = min[i];
    eachExam.maximum = max[i];
    combinedExamGrades.push(eachExam);
  }
  return combinedExamGrades;
}

function getStudentGrades(finalPercentGrades, finalLetterGrades) {
  var combinedGrades = [];
  for(i = 0; i < finalPercentGrades.length; i += 1) {
    combinedGrades.push(String(finalPercentGrades[i]) + ' (' + finalLetterGrades[i] + ')');
  }
  return combinedGrades;
}

function getMinGradePerExam(examGrades) {
  var totalMinGradeEachExam = []
  for (i = 0; i < examGrades[0].length; i += 1) {
    var minExam = 100;
      examGrades.forEach(function(student) {
        student[i] < minExam ? minExam = student[i] : minExam;
    });
    totalMinGradeEachExam.push(minExam);
  };
  return totalMinGradeEachExam;
}

function getMaxGradePerExam(examGrades) {
  var totalMaxGradeEachExam = []
  for (i = 0; i < examGrades[0].length; i += 1) {
    var maxExam = 0;
      examGrades.forEach(function(student) {
        student[i] > maxExam ? maxExam = student[i] : maxExam;
    });
    totalMaxGradeEachExam.push(maxExam);
  };
  return totalMaxGradeEachExam;
}

function getAvgGradePerExam(examGrades) {
  var totalGradeEachExam = []
  for (i = 0; i < examGrades[0].length; i += 1) {
    var eachExamTotal = 0;
      examGrades.forEach(function(student) {
        eachExamTotal += student[i];
    });
    totalGradeEachExam.push(eachExamTotal / (examGrades.length));
  };
  return totalGradeEachExam;
}

function getExamGrades(scores) {
  var allExamScores = [];
  Object.keys(scores).forEach(function(student) {
    var studentTestScoresArray = scores[student].scores.exams; // why can't scores.student work, but this does?
    allExamScores.push(studentTestScoresArray);    
  });
  return allExamScores;
}

function returnFinalLetterGrades(finalPercentGrades) {
  var letterGrades = [];
  finalPercentGrades.forEach(function(grade) {
    letterGrades.push(lookupFinalLetterGrade(grade));
  });
  return letterGrades;
}

function lookupFinalLetterGrade(finalPercentGrade) {
  if (finalPercentGrade >= 93) {
    return 'A';
  } else if (finalPercentGrade >= 85 && finalPercentGrade < 93) {
    return 'B';
  } else if (finalPercentGrade >= 77 && finalPercentGrade < 85) {
    return 'C';
  } else if (finalPercentGrade >= 69 && finalPercentGrade < 77) {
    return 'D';
  } else if (finalPercentGrade >= 60 && finalPercentGrade < 69) {
    return 'E';
  } else {
    return 'F';
  };
}

function calculateFinalGrade(avgTestScores, totalExerciseScores) { // two arrays, produce one final array with weights applied
  var weightedFinalScore = [];
  for (i = 0; i < avgTestScores.length; i += 1) {
    weightedFinalScore.push(Math.round(avgTestScores[i] * EXAMS_WEIGHT + totalExerciseScores[i] * EXERCISES_WEIGHT));
  };
  return weightedFinalScore;
}

function calculateExerciseScores(scores) {
  var totalExerciseScore = [];
  Object.keys(scores).forEach(function(student) {
    var sumExerciseScore = 0;
    var studentTestScoresArray = scores[student].scores.exercises; // why can't scores.student work, but this does?
    studentTestScoresArray.map(function(exerciseScore) {
      sumExerciseScore += exerciseScore;
    });
    totalExerciseScore.push(Math.round(sumExerciseScore));    
  });
  return totalExerciseScore;
}

function calculateExamScores(scores) {
  var avgExamScore = [];
  Object.keys(scores).forEach(function(student) {
    var sumTestScores = 0;
    var studentTestScoresArray = scores[student].scores.exams; // why can't scores.student work, but this does?
    studentTestScoresArray.map(function(examScore) {
      sumTestScores += examScore;
    });
    avgExamScore.push(Math.round(sumTestScores / 4));    
  });
  return avgExamScore;
}

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));
/* Output
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/