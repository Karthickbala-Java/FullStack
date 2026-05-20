let playerGuess = 6;
const crctAnswer = 6;
const message =
  playerGuess === crctAnswer
    ? "win"
    : playerGuess > crctAnswer
      ? "too High"
      : "too low";
console.log(message);
