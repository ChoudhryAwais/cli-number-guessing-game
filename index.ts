#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to number guessing game, instructions are below:-");
console.log(
  "- You have given the 3 round to guess the computer genetrated number."
);
console.log("- In which you have to select number from 1-20.");
console.log(
  "- In order to win the game,you have to guess the right number atleast once."
);

const computerGenerated = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let result = false;
for (let i = 1; i <= 3; i++) {
  let round = await inquirer.prompt([
    {
      name: "guessNum",
      message: `Round ${i}:\nGuess the number:`,
      type: "number",
    },
  ]);
  if (round.guessNum === computerGenerated) {
    console.log("Congratulation! your guess", round.guessNum, "is correct.");
    result = true;
    break;
  } else {
    console.log("Wrong guess.");
  }
}
if (!result) {
  console.log(
    "You fail to guess the number.\nCorrect Answer is:",
    computerGenerated
  );
}
