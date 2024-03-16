function getGrade(s1, s2, s3) {
  let scoreAverage = (s1 + s2 + s3) / 3;
  if (scoreAverage <= 100 && scoreAverage >= 90) {
    return "A";
  }
  if (scoreAverage < 90 && scoreAverage >= 80) {
    return "B";
  }
  if (scoreAverage < 80 && scoreAverage >= 70) {
    return "C";
  }
  if (scoreAverage < 70 && scoreAverage >= 60) {
    return "D";
  }
  if (scoreAverage < 60 && scoreAverage >= 0) {
    return "F";
  }
}
