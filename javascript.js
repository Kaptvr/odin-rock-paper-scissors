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

let playerScore = 0;
let computerScore = 0;

function playRound (computerSelection, playerSelection)
{
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();


  if (computerSelection === playerSelection)
  {
    return "It's a Tie";
  }
  else if (computerSelection === "Rock" && playerSelection === "Scissors" ||
          computerSelection === "Paper" && playerSelection === "Rock" ||
          computerSelection === "Scissors" && playerSelection === "Paper")
  {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
          playerSelection === "Paper" && computerSelection === "Rock" ||
          playerSelection === "Scissors" && computerSelection === "Paper")
  {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else
  {
    return "Invalid choice"
  }
}

function pickWinner (playerScore, computerScore)
{
  if (playerScore > computerScore)
  {
    return "Player wins!";
  }
  else if (computerScore > playerScore)
  {
    return "Computer wins!"
  }
  else
  {
    return "Tie!"
  }
}

function game ()
{
  for (let i = 0; i < 5; i++)
  {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt(`(Round ${i+1} out of 5) Choose Rock Paper or Scissors`);

    let verdict = playRound(computerChoice, playerChoice);
    console.log(verdict);

    if (verdict === "Invalid choice")
    {
      i--;
    }
  }

  console.log(pickWinner(playerScore, computerScore));
}

game ();