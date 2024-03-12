function possiblyPerfect(key, answers) {
  console.log(key, answers);
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let incompleteAnswers = 0;

  for (let i = 0; i < key.length; i++) {
    if (key[i] === answers[i]) {
      correctAnswers += 1;
    }
    if (key[i] != answers[i]) {
      incorrectAnswers += 1;
    }
    if (key[i] === "_") {
      incompleteAnswers += 1;
    }
  }

  let allTestScore = correctAnswers + incompleteAnswers; //correct answers
  let nothingTestScore = incorrectAnswers; //incorrect answers

  return allTestScore === key.length || nothingTestScore === key.length
    ? true
    : false;
}
