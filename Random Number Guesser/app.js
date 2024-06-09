const prompt = require("prompt-sync")();

const terget = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
    guesses++;
  const guess = Number(prompt("Guess a number between 0 and 100: "));

  if (guess > terget) {
    console.log("Too high");
  } else if (guess === terget) {
    console.log("Equal!");
  } else {
    console.log("Too low");

    break;
  }
}

console.log("You guessed it in " + guesses + " guesses!");