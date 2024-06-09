const prompt = require("prompt-sync")();

let win = 0;
let losses = 0;
let ties = 0;

while (true) {
  const playerChoice = prompt("Enter rock , paper of scissors(or q to quit): ");
  if (playerChoice.toLowerCase() === "q") {
    console.log("Thanks for playing!");
    break;
  }
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    console.log("Plase Enter a valid playerChoice");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 2);
  const computerChoice = choices[randomChoice];

  console.log(
    "You chose " + playerChoice + " and the computer chose " + computerChoice
  );

  if (computerChoice === playerChoice) {
    console.log("Draw!");
    ties++;
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    console.log("Win!");
    win++;
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    console.log("Lose!");
    losses++;
  } else {
    console.log("Lose!");
    losses++;
  }
}
console.log(
  "You have " + win + " wins, " + losses + " losses, and " + ties + " ties"
);
