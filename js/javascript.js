let computerChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

let playerChoice = prompt("Select: Rock, Paper or Scissor").toLowerCase();

console.log("Computer plays: " + getComputerChoice());
console.log("Player plays: " + playerChoice);
