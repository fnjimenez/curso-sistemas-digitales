let currentSlide = 1;
const totalSlides = 15;

function updateSlideDisplay() {
  const display = document.getElementById("currentSlide");
  if (display) {
    display.textContent = currentSlide;
    document.getElementById("totalSlides").textContent = totalSlides;
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlideDisplay();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentSlide < totalSlides) {
    currentSlide++;
    updateSlideDisplay();
  }
});

updateSlideDisplay();

// Temporizador
let timer = 2400; // 40 minutos
let timerInterval;
const timerDisplay = document.getElementById("timeRemaining");

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function updateTimer() {
  if (timer > 0) {
    timer--;
    timerDisplay.textContent = formatTime(timer);
  } else {
    clearInterval(timerInterval);
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timer = 2400;
  timerDisplay.textContent = formatTime(timer);
});

timerDisplay.textContent = formatTime(timer);
