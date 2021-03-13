/*
Write a function that determines the mean (average) of the three scores passed to it, 
and returns the letter associated with that grade.

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Note the difference in use of switch statement (true) and then the case switches
*/

function averageScore(s1, s2, s3) {
  return ((s1 + s2 + s3) / 3);
}

function getGrade(s1, s2, s3) {
  avgScore = averageScore(s1, s2, s3)
  switch (true) {
    case avgScore >= 90:
      return("A");
      break;
    case avgScore >= 80 && avgScore < 90:
        return("B");
      break;
    case avgScore >= 70 && avgScore < 80:
        return("C");
      break;
    case avgScore >= 60 && avgScore < 70:
        return("D");
      break;
    default:
        return("F");
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
