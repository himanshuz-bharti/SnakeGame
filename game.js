function frame() {
  drawBoard();
  drawFood();
  moveSnake();
  drawSnake();
  renderScore();
  if (hitWall() || hitSelf()) {
    clearInterval(gameLoop);
    gameOver();
  }
}
frame();

// restart the game
playAgainBtn.addEventListener('click', restartGame);
function restartGame() {
  // reset snake length and position
  snake = [
    { x: 2, y: 0 }, // Head
    { x: 1, y: 0 }, // Body
    { x: 0, y: 0 }, // Tail
  ];

  // reset directions
  currentDirection = '';
  directionsQueue = [];

  // hide the game over screen
  gameOverEl.classList.add('hide');

  // reset the gameStarted state to false
  gameStarted = false;

  // re-draw everything
  frame();
}
