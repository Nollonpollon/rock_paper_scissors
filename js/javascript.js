const computerChoices = ["Rock", "Paper", "Scissor"];
let winner;
// The computer chooses rock, paper, scissor
function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Play a round
function playRound(computer, player) {
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    winner = `Player played: ${playerSelection} \n Computer played: ${computerSelection} \n ${playerSelection} beats ${computerSelection} Player Wins!`;
    return winner;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor")
  ) {
    winner = `Player played: ${playerSelection} \n Computer played: ${computerSelection} \n ${computerSelection} beats ${playerSelection} Computer Wins!`;
    return winner;
  } else if (playerSelection === computerSelection) {
    winner = `Draw player: ${playerSelection}, computer: ${computerSelection}`;
    return winner;
  } else {
    console.log(
      `Invalid selection, choose Rock, Paper or Scissor player: ${playerSelection}, computer: ${computerSelection}`
    );
  }
}

function game() {
  console.log(playRound(computerSelection, playerSelection));
}

// Get computer choice
const computerSelection = getComputerChoice().toLowerCase();

// Get players choice
const playerSelection = prompt("Select: Rock, Paper or Scissor").toLowerCase();

console.log(playRound());
