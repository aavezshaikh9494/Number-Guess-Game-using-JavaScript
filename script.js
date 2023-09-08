"use strict";
// Variable Decleration
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

//Displaying the secret Number
// document.querySelector(".number").textContent = secretNumber;

// Function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Creating Event 1
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("⛔️ No Number");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Guess!");
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lose :(");
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Creating event 2
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  score = 10;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
});
