// DOM Elements
const breakDecrement = document.getElementById('break-decrement');
const breakIncrement = document.getElementById('break-increment');
const sessionDecrement = document.getElementById('session-decrement');
const sessionIncrement = document.getElementById('session-increment');
const breakLength = document.getElementById('break-length');
const sessionLength = document.getElementById('session-length');
const timerLabel = document.getElementById('timer-label');
const timeLeft = document.getElementById('time-left');
const startStop = document.getElementById('start_stop');
const reset = document.getElementById('reset');
const beep = document.getElementById('beep');
const timer = document.querySelector('.timer');

// App State
const state = {
  breakLength: 5,        // in minutes
  sessionLength: 25,     // in minutes
  currentTimeLeft: 1500, // in seconds (25 minutes)
  timerId: null,
  isRunning: false,
  timerType: 'Session'   // 'Session' or 'Break'
};

// Format time from seconds to mm:ss format
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the display
function updateDisplay() {
  breakLength.textContent = state.breakLength;
  sessionLength.textContent = state.sessionLength;
  timeLeft.textContent = formatTime(state.currentTimeLeft);
  timerLabel.textContent = state.timerType;
  
  // Add visual indication when timer is about to end
  if (state.currentTimeLeft < 60) {
    timer.classList.add('ending');
  } else {
    timer.classList.remove('ending');
  }
}

// Break length controls
breakDecrement.addEventListener('click', () => {
  if (state.breakLength > 1 && !state.isRunning) {
    state.breakLength--;
    if (state.timerType === 'Break') {
      state.currentTimeLeft = state.breakLength * 60;
    }
    updateDisplay();
  }
});

breakIncrement.addEventListener('click', () => {
  if (state.breakLength < 60 && !state.isRunning) {
    state.breakLength++;
    if (state.timerType === 'Break') {
      state.currentTimeLeft = state.breakLength * 60;
    }
    updateDisplay();
  }
});

// Session length controls
sessionDecrement.addEventListener('click', () => {
  if (state.sessionLength > 1 && !state.isRunning) {
    state.sessionLength--;
    if (state.timerType === 'Session') {
      state.currentTimeLeft = state.sessionLength * 60;
    }
    updateDisplay();
  }
});

sessionIncrement.addEventListener('click', () => {
  if (state.sessionLength < 60 && !state.isRunning) {
    state.sessionLength++;
    if (state.timerType === 'Session') {
      state.currentTimeLeft = state.sessionLength * 60;
    }
    updateDisplay();
  }
});

// Start/Stop timer function
function toggleTimer() {
  if (!state.isRunning) {
    // Start the timer
    startStop.classList.add('active');
    state.isRunning = true;
    
    state.timerId = setInterval(() => {
      state.currentTimeLeft--;
      
      // Check if timer reached 00:00
      if (state.currentTimeLeft < 0) {
        // Play audio
        beep.play();
        
        // Switch timer type
        if (state.timerType === 'Session') {
          state.timerType = 'Break';
          state.currentTimeLeft = state.breakLength * 60;
        } else {
          state.timerType = 'Session';
          state.currentTimeLeft = state.sessionLength * 60;
        }
      }
      
      updateDisplay();
    }, 1000);
  } else {
    // Stop the timer
    startStop.classList.remove('active');
    state.isRunning = false;
    clearInterval(state.timerId);
  }
}

// Reset timer function
function resetTimer() {
  // Clear any running timer
  clearInterval(state.timerId);
  
  // Reset audio
  beep.pause();
  beep.currentTime = 0;
  
  // Reset state to defaults
  state.breakLength = 5;
  state.sessionLength = 25;
  state.currentTimeLeft = 25 * 60;
  state.isRunning = false;
  state.timerType = 'Session';
  
  // Update UI
  startStop.classList.remove('active');
  updateDisplay();
}

// Event listeners for start/stop and reset buttons
startStop.addEventListener('click', toggleTimer);
reset.addEventListener('click', resetTimer);

// Initialize display on page load
updateDisplay();

// Prevent the audio from auto-playing on page load
beep.addEventListener('canplaythrough', () => {
  beep.volume = 0.5;  // Set volume to 50%
});
