# Uninitialized Winner Variable in Dapp Game Logic

This repository demonstrates a common bug in decentralized applications (Dapps): an uninitialized variable used to determine the winner of a game.  The bug occurs when the `winner` variable is accessed before it's properly assigned a value, leading to unpredictable results.  The solution involves initializing the variable before use.

## Bug
The `checkWinner.js` file contains the buggy code.  The `winner` variable is not initialized before being used within the conditional statements. If the game doesn't result in a win or lose condition, winner will remain undefined leading to errors. 

## Solution
The `checkWinnerSolution.js` file provides the corrected code. The solution initializes `winner` to a default value (null in this case) before the conditional check, ensuring that `winner` always has a defined value, preventing any runtime errors.