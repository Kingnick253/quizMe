// Elements Selection
const btnAnswer = document.querySelectorAll("button");
const timeEl = document.querySelector("#timer");
const scoreEl = document.querySelector("#score");
const endGameEl = document.querySelector("#endGame");
const resultsEl = document.querySelector("#results");
const gameEl = document.querySelector("#gameContainer");
const viewHighscore = document.querySelector("#viewhighScores");
const homepage = document.querySelector(".homepage");
const time = document.querySelector(".time");
const highscoreEl = document.querySelector("#highScore");
const startBtn = document.querySelector("#startBtn");

// Game Variables
let questionIndex = 0;
let timeLeft = 60;
let score = 0;
let scoreArr = [];
let initialsArr = [];
let timeInterval;

// Questions Array
const questions = [
  {
    question: "Which is a JavaScript Data Type?",
    answers: ["Undefined", "div", "body", "h1"],
    correctAns: "Undefined",
  },
  {
    question: "Which is a looping structure?",
    answers: ["For Loop", "IF/Else", "Array", "Function"],
    correctAns: "For Loop",
  },
  {
    question: "Arrays use what to store more than one item?",
    answers: [
      "Parentheses",
      "Curly Braces",
      "Square Brackets",
      "Carrot Brackets",
    ],
    correctAns: "Square Brackets",
  },
  {
    question: "Express is part of which language?",
    answers: ["HTML", "CSS", "Python", "JavaScript"],
    correctAns: "JavaScript",
  },
  {
    question: "What is the preferred way to declare a variable?",
    answers: ["const/let", "var", "Declare", "Define"],
    correctAns: "const/let",
  },
];

// Functions
function displayQuestion() {
  const currentQuestion = questions[questionIndex];
  gameEl.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    ${currentQuestion.answers
      .map(
        (answer, index) => `
        <button class="answer-btn" data-answer="${answer}">${answer}</button>
      `
      )
      .join("")}
  `;
}

function startTimer() {
  timeInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeEl.textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

function startGame() {
  viewHighscore.style.display = "none";
  homepage.classList.add("hide");
  questionIndex = 0;
  timeLeft = 60;
  score = 0;
  startTimer();
  displayQuestion();
}

function endGame() {
  clearInterval(timeInterval);
  gameEl.style.display = "none";
  endGameEl.style.display = "block";
  scoreEl.textContent = score;
  time.classList.add("hide");
}

function handleAnswer(event) {
  if (!event.target.matches(".answer-btn")) return;

  const selectedAnswer = event.target.dataset.answer.trim();
  const correctAnswer = questions[questionIndex].correctAns;

  resultsEl.style.display = "block";
  resultsEl.textContent = `Q #${questionIndex + 1} ${
    selectedAnswer === correctAnswer ? "Nice Job!" : "Wrong!"
  }`;

  if (selectedAnswer === correctAnswer) {
    score += 5;
  } else {
    timeLeft -= 10;
  }

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    displayQuestion();
  } else {
    endGame();
  }
}

function saveScore() {
  const initials = document.querySelector("#initials").value.trim();
  if (initials === "") {
    alert("You need to add your Initials");
    return;
  }
  scoreArr.push(score);
  initialsArr.push(initials);

  localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
  localStorage.setItem("initialsArr", JSON.stringify(initialsArr));
  displayHighscores();
}

function displayHighscores() {
  endGameEl.innerHTML = `
    <div>
      <h1>Highscores</h1>
      <table id="highscoreTable">
        <tr><th>Top Player</th><th>High Score</th></tr>
        ${scoreArr
          .map(
            (score, index) =>
              `<tr><td>${initialsArr[index]}</td><td>${score}</td></tr>`
          )
          .join("")}
      </table>
      <button id="playAgainBtn">Play Again</button>
    </div>
  `;

  document.querySelector("#playAgainBtn").addEventListener("click", startGame);
}

// Event Listeners
startBtn.addEventListener("click", startGame);
gameEl.addEventListener("click", handleAnswer);
highscoreEl.addEventListener("click", saveScore);
viewHighscore.addEventListener("click", displayHighscores);
