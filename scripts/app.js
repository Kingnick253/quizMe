// scripts/app.js
import { startGame } from "./gameLogic.js";
import { saveScore } from "./storage.js";

// Event Listeners
document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("saveScoreBtn").addEventListener("click", () => {
  const initials = document.getElementById("initials").value;
  if (initials) {
    saveScore(initials, score); // Optionally save score to local storage
  }
  // Restart the game or show high scores
});
