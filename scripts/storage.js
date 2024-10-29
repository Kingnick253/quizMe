export function saveScore(score) {
  const initials = document.querySelector("#initials").value.trim();
  if (!initials) return alert("Enter your initials");

  const scores = JSON.parse(localStorage.getItem("highscores")) || [];
  scores.push({ initials, score });
  localStorage.setItem("highscores", JSON.stringify(scores));
  displayHighscores();
}

export function displayHighscores() {
  const scores = JSON.parse(localStorage.getItem("highscores")) || [];
  const highscoreTable = document.querySelector("#endGame");

  highscoreTable.innerHTML = `
        <h1>Highscores</h1>
        <table>
            ${scores
              .map((s) => `<tr><td>${s.initials}</td><td>${s.score}</td></tr>`)
              .join("")}
        </table>
        <button id="playAgainBtn">Play Again</button>
    `;
  document.querySelector("#playAgainBtn").addEventListener("click", startGame);
}
