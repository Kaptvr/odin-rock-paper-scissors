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
  const result = document.querySelector('.result');
  const playerScoreDiv = document.querySelector('.playerScore');
  const computerScoreDiv = document.querySelector('.computerScore');
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      const computerChoice = getComputerChoice();
      let roundResult = (playRound(computerChoice, e.target.className)); //
      result.textContent = roundResult;
      playerScoreDiv.textContent = `Your score: ${playerScore}`;
      computerScoreDiv.textContent = `Computer score: ${computerScore}`;
      if (playerScore === 5 || computerScore === 5) {
        displayResult();
        buttons.forEach(button => {
          button.setAttribute('disabled', true);
        })}})});
}

function displayResult () {
  const endResult = document.querySelector('.endResult');
  if (computerScore === 5) {
    endResult.textContent = 'Computer wins!';
  }
  else {
    endResult.textContent = 'You win!';
  }
}

game ();



