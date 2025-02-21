# Android Calculator App

This is a simple calculator application developed in Android using **LinearLayout**. The app performs basic arithmetic operations like **Addition, Subtraction, Multiplication, and Division**.

## Features
- **User Input:** Accepts two numbers as input.
- **Basic Operations:** Performs addition, subtraction, multiplication, and division.
- **Error Handling:** Displays messages for invalid inputs (e.g., division by zero).
- **User Interface:** Simple and user-friendly design with a **LinearLayout**.

## What I Learned
- **Views:** Implementing `TextView`, `EditText`, and `Button` for user interaction.
- **Layouts:** Using `LinearLayout` with **vertical orientation** for organizing UI elements.
- **Event Handling:** Handling button clicks using `onClick` method.
- **Toast Messages:** Implementing error handling for empty input fields and division by zero.

## UI Screenshots
![Calculator UI](calculator_screenshot.png) *(Add your screenshot here)*

## Working Video
- [Watch Demo Video 1](https://drive.google.com/file/d/1lWLCTuS-5DhwW0TwudxW7we_rQhH3GUC/view?usp=drive_link)  
 

## Code Structure
### `activity_main.xml`
Defines the UI layout with:
- **EditText** for number input.
- **Buttons** for arithmetic operations.
- **TextView** for displaying results.

### `MainActivity.java`
Handles:
- **Button Click Events**
- **Input Validation**
- **Arithmetic Calculations**
- **Updating the UI with results**

# Android App: Passing Data Between Activities 📱

## Overview
This is a simple Android application that demonstrates how to pass data between two activities using an `Intent`. The user can enter a project name in the first activity and send it to the second activity for display.

## Features
- 📌 **Two Activities:** `MainActivity` and `MainActivity2`
- 🔄 **Data Passing:** Transfers project name from `MainActivity` to `MainActivity2`
- 🎨 **User-Friendly UI:** Designed using `ConstraintLayout`, `ScrollView`, `RelativeLayout`, `FrameLayout`, and `CardView`
- 🎭 **Profile Section:** Displays a user profile with an image placeholder inside a `CardView`
- 🖼️ **Profile Editing Icon:** Positioned within `FrameLayout`
- 🚀 **Validation Handling:** Prevents empty input submission

## Files & Explanation

### 1️⃣ `MainActivity.java`
- Contains an `EditText` where the user enters a project name.
- Clicking the button validates input and navigates to `MainActivity2` with the entered text.

### 2️⃣ `MainActivity2.java`
- Receives the data from `MainActivity` using `getIntent()`.
- Displays the received project name in a `TextView`.

### 3️⃣ `activity_main.xml`
- UI layout for `MainActivity`:
  - **User Profile Section**
    - `FrameLayout`: Wraps the profile picture and edit icon.
    - `CardView`: Circular container for the profile image.
    - `ImageView`: Profile image and edit icon.
  - **Input & Navigation**
    - `EditText`: Field to enter the project name.
    - `Button`: Sends the entered name to `MainActivity2`.

### 4️⃣ `activity_main2.xml`
- UI layout for `MainActivity2`:
  - Displays a welcome message.
  - Shows the received project name.
  - Contains a back button to return to `MainActivity`.

## Working Video
- [Watch Demo Video 1](https://drive.google.com/file/d/1jHStVsCZ0bYW0evXnmbhPYMh7ICT1JWB/view?usp=drive_link)  

## How to Run the Project
1. Clone the repository or copy the source code into your Android project.
2. Open the project in **Android Studio**.
3. Connect an Android device or use an **Emulator**.
4. Click **Run (▶️)** to launch the app.
5. Enter a project name in the first activity and submit.
6. The second activity displays the entered project name.

🚀 **Happy Coding!** 🚀



