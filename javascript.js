function getComputerChoice ()
{
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0)
  {
    return "rock";
  }
  else if (choice === 1)
  {
    return "paper";
  }
  else
  {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound (computerSelection, playerSelection)
{
  playerSelection = playerSelection.toLowerCase();


  if (computerSelection === playerSelection)
  {
    return "It's a Tie";
  }
  else if (computerSelection === "rock" && playerSelection === "scissors" ||
          computerSelection === "paper" && playerSelection === "rock" ||
          computerSelection === "scissors" && playerSelection === "paper")
  {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors" ||
          playerSelection === "paper" && computerSelection === "rock" ||
          playerSelection === "scissors" && computerSelection === "paper")
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
  const buttons = document.querySelector('.buttons');
  const computerChoice = getComputerChoice();
  buttons.addEventListener('click', (e => {
    alert(playRound(computerChoice, e.target.className))
  }));
}

game ();