let timerInterval;

export function startTimer(duration, callback) {
    let timeLeft = duration;
    document.getElementById("timer").textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            callback(); // End game when timer reaches zero
        }
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}