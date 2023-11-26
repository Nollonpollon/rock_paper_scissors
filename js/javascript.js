let computerChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  console.log(
    computerChoices[Math.floor(Math.random() * computerChoices.length)]
  );
}
