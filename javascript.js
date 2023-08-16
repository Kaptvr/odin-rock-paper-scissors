function getComputerChoice ()
{
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0)
  {
    return "Rock";
  }
  else if (choice === 1)
  {
    return "Paper";
  }
  else
  {
    return "Scissors";
  }
}

function playRound (computerSelection, playerSelection)
{
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();


  if (computerSelection === playerSelection)
  {
    return "It's a Tie"
  }
  else if (computerSelection === "Rock" && playerSelection === "Scissors" ||
          computerSelection === "Paper" && playerSelection === "Rock" ||
          computerSelection === "Scissors" && playerSelection === "Paper")
          {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
          }
  else
  {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }
}

const computerChoice = getComputerChoice();
const playerChoice = "Scissors";

console.log(playRound(computerChoice, playerChoice));
