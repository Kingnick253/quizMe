import { questions } from "./questions.js";
import { startTimer, stopTimer } from "./timer.js";

let currentQuestionIndex = 0;
let score = 0;
// starts the game
export function startGame() {
  document.getElementById("startScreen").classList.add("hide");             // Adds the class hide to start screen.
  document.getElementById("gameContainer").classList.remove("hide");        // removes the hide class from gameContainer, displaying gameContainer.
  currentQuestionIndex = 0;                                                 // displays the first question and keeps track of the questions
  startTimer(60, endGame);                                                  // Sets the timer for the whole game and runs endGame function when the timer reaches zero.
  showQuestion();                                                           // Runs function to display Questions.
}

const questionData = questions[currentQuestionIndex];                       // stores data for the current question.
document.getElementById("question").textContent = questionData.question;    // displays the current question.
const answerButtons = document.getElementById("answerButtons");             // sets the answer button container
answerButtons.innerHTML = "";                                               // clears any previous answer buttons

// Loops through each answer for the current question
questionData.answers.forEach((answer) => {
    const button = document.createElement("button");                        // creates a new button element for each answer
    button.textContent = answer;                                            // sets the button's text to the current answer
    button.classList.add("answerBtn");                                      // adds the "answerBtn" class for styling
    button.addEventListener("click", () => handleAnswer(answer));           // adds a click event to handle answer selection
    answerButtons.appendChild(button);                                      // appends the answer button to the answerButtons container
});

function handleAnswer(selectedAnswer) {
  const questionData = questions[currentQuestionIndex];
  if (selectedAnswer === questionData.correctAnswer) {
    score += 10;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

export function endGame() {
  stopTimer();
  document.getElementById("gameContainer").classList.add("hide");
  document.getElementById("endScreen").classList.remove("hide");
  document.getElementById("finalScore").textContent = score;
}
