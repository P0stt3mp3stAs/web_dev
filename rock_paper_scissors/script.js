function playGame(playerChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
      document.getElementById('result0').textContent = `you picked ${playerChoice}, the computer picked ${computerChoice}. It\'s a tie!`;
  } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
      document.getElementById('result1').textContent = `you picked ${playerChoice}, the computer picked ${computerChoice}. You win!`;
  } else {
      document.getElementById('result-1').textContent = `you picked ${playerChoice}, the computer picked ${computerChoice}. You lose!`;
  }
}