import { startGame, endGame, handleAnswer } from "./gameLogic.js";
import { loadQuestions } from "./questions.js";
import { startTimer } from "./timer.js";
import { displayHighscores } from "./storage.js";

document.querySelector("#startBtn").addEventListener("click", startGame);
document.querySelector("#viewhighScores").addEventListener("click", displayHighscores);
document.querySelector("#gameContainer").addEventListener("click", handleAnswer);

// Initialize questions data
loadQuestions();