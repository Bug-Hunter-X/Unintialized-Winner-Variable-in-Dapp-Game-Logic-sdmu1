function checkWinner() {
  // ... some code to check the game state ...
  if (gameState === 'win') {
    // The bug is here: winner is declared as undefined outside the scope
    winner = 'Player 1'; 
  } else if (gameState === 'lose') {
    winner = 'Player 2'; 
  }
}