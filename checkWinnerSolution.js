function checkWinner() {
  let winner = null; // Initialize winner to null
  // ... some code to check the game state ...
  if (gameState === 'win') {
    winner = 'Player 1'; 
  } else if (gameState === 'lose') {
    winner = 'Player 2'; 
  }
  return winner; // Return winner to use elsewhere in the program
} 