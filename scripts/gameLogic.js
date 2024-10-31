import { questions } from "./questions.js";
import { startTimer, stopTimer } from "./timer.js";

let currentQuestionIndex = 0;
let score = 0;

export function startGame() {
    document.getElementById("startScreen").classList.add("hide");
    document.getElementById("gameContainer").classList.remove("hide");
    score = 0;
    currentQuestionIndex = 0;
    startTimer(60, endGame);
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const answerButtons = document.getElementById("answerButtons");
    answerButtons.innerHTML = "";

    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answerBtn");
        button.addEventListener("click", () => handleAnswer(answer));
        answerButtons.appendChild(button);
    });
}

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