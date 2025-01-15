# Stopwatch with JavaScript

This project implements a simple stopwatch using **JavaScript**, where the time is tracked in seconds and tenths of a second. It provides basic functionality for starting, stopping, and resetting the timer.

## JavaScript Functionality

- **Start**: Begins the stopwatch by setting an interval that updates the time every 10 milliseconds (for tenths of a second).
- **Stop**: Pauses the stopwatch by clearing the interval.
- **Reset**: Resets the stopwatch to `00:00`, stopping the timer.

## Key JavaScript Concepts Used

- **setInterval()**: Used to call a function at regular intervals (every 10 milliseconds) to update the time in real-time.
- **clearInterval()**: Stops the timer by clearing the active interval when the stop or reset button is clicked.
- **Event Handlers**: Used to trigger actions like starting, stopping, and resetting the timer when the corresponding buttons are clicked.
- **DOM Manipulation**: Updates the HTML content to reflect the current time, showing seconds and tenths of a second in real-time.

## How It Works

1. **Start**: When the start button is clicked, the stopwatch begins counting. The `setInterval()` method runs every 10 milliseconds to update the display.
2. **Stop**: Clicking the stop button halts the timer by clearing the interval using `clearInterval()`.
3. **Reset**: Clicking the reset button stops the timer and resets the time to `00:00`.

## How to Use

1. Open the `index.html` file in a browser.
2. Click **Start** to begin the stopwatch.
3. Click **Stop** to pause.
4. Click **Reset** to reset the time to `00:00`.

## Conclusion

This project demonstrates how JavaScript can be used to build interactive web applications. The stopwatch functionality relies on JavaScript for real-time updates, DOM manipulation, and event handling.
