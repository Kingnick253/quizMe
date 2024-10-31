import { questions } from "./questions.js";
import { startTimer, resetTimer } from "./timer.js";
import { saveScore } from "./storage.js";

let score = 0;
let questionIndex = 0;

export function startGame() {
    document.querySelector(".homepage").classList.add("hide");
    console.log("Start button hit.");
    questionIndex = 0;
    score = 0;
    resetTimer();
    startTimer(endGame);
    displayQuestion();
}


export function displayQuestion() {
  const currentQuestion = questions[questionIndex];
  const gameEl = document.querySelector("#gameContainer");
  gameEl.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.answers
          .map((answer) => `<button class="answer-btn">${answer}</button>`)
          .join("")}
    `;
}

export function handleAnswer(event) {
  if (event.target.matches(".answer-btn")) {
    const isCorrect =
      event.target.textContent.trim() === questions[questionIndex].correctAns;
    updateScoreAndFeedback(isCorrect);
    questionIndex < questions.length - 1 ? nextQuestion() : endGame();
  }
}

function nextQuestion() {
  questionIndex++;
  displayQuestion();
}

function updateScoreAndFeedback(isCorrect) {
  const resultsEl = document.querySelector("#results");
  resultsEl.style.display = "block";
  resultsEl.textContent = isCorrect ? "Correct!" : "Incorrect!";
  score += isCorrect ? 5 : 0;
}

function endGame() {
  document.querySelector("#score").textContent = score;
  saveScore(score);
  // Show end game screen
}
