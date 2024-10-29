let timeInterval;
let timeLeft = 60;

export function startTimer(onTimeUp) {
  timeInterval = setInterval(() => {
    if (timeLeft > 0) {
      document.querySelector("#timer").textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      onTimeUp();
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(timeInterval);
  timeLeft = 60;
}
