let computerRandom = ["rock", "paper", "scissors"];

function play(playerChoice) {
  let computerChoice =
    computerRandom[Math.floor(Math.random() * computerRandom.length)];
  console.log(computerChoice);
  console.log(playerChoice);

  if (playerChoice == computerChoice) {
    document.querySelector("#outcome").innerHTML = `<h2>You Tied!</h2>`;
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    document.querySelector("#outcome").innerHTML = `<h2>You Won!</h2>`;
  } else {
    document.querySelector("#outcome").innerHTML = `<h2>You Lose!</h2>`;
  }
}
