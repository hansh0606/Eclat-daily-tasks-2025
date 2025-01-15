let seconds = 0
let tens = 0
const displayTens = document.getElementById('tens')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval

buttonStart.onclick = () => {
  console.log("Start Button Clicked"); // Debugging statement
  clearInterval(interval) // Ensure any previous interval is cleared before starting a new one
  interval = setInterval(timer, 10)
}

buttonStop.onclick = () => {
  console.log("Stop Button Clicked"); // Debugging statement
  clearInterval(interval) // Stops the interval
}

buttonReset.onclick = () => {
  console.log("Reset Button Clicked"); // Debugging statement
  clearInterval(interval) // Stops the interval if it's running
  seconds = 0
  tens = 0
  displayTens.innerHTML = `00` // Resetting tens display
  displaySeconds.innerHTML = `00` // Resetting seconds display
}

const timer = () => {
  tens++ // Increment tens
  if (tens > 99) { // When tens exceed 99, increment seconds and reset tens
    seconds++
    tens = 0
  }

  // Debugging statements to trace values
  console.log(`Tens: ${tens}, Seconds: ${seconds}`); // Output tens and seconds to console

  // Update display for tens
  if (tens < 10) {
    displayTens.innerHTML = `0${tens}`
  } else {
    displayTens.innerHTML = tens
  }

  // Update display for seconds
  if (seconds < 10) {
    displaySeconds.innerHTML = `0${seconds}`
  } else {
    displaySeconds.innerHTML = seconds
  }
}
