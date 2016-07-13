$(document).ready(function() {

var boardView = new BoardView();
var board = new Board();
board.placeNewTile();
board.placeNewTile();
boardView.renderBoard(board.grid);

  $(document).on('keyup', function(event) {
    event.preventDefault();
    var newTile;
    newTile = false;
    if(event.keyCode === 38) {
        if(board.canMoveUpToCombine() || board.canAnyTileMoveUp()) {
            newTile = true;
        }
      board.moveUpToCombine();
      board.removeTheBigO();
      board.moveUp();
      nextMove(newTile);
    }
    if(event.keyCode === 40) {
        if(board.canMoveDownToCombine() || board.canAnyTileMoveDown()) {
            newTile = true;
        }
       board.moveDownToCombine();
       board.removeTheBigO();
       board.moveDown();
       nextMove(newTile);
    }
    if(event.keyCode === 37) {
        if(board.canMoveLeftToCombine() || board.canAnyTileMoveLeft()) {
            newTile = true;
        }
      board.moveLeftToCombine();
      board.removeTheBigO();
      board.moveLeft();
      nextMove(newTile);
    }
    if(event.keyCode === 39) {
        if(board.canMoveRightToCombine() || board.canAnyTileMoveRight()) {
            newTile = true;
        }
      board.moveRightToCombine();
      board.removeTheBigO();
      board.moveRight();
      nextMove(newTile);
    }
    if(board.isBoardFull() && !board.canAnyTilesMoveToCombine()) {
      boardView.gameOver();
    }
  });

var nextMove = function(newTile) {
  if (!board.isBoardFull()) {
      if (newTile === true) {
          board.placeNewTile();
      }
  boardView.renderBoard(board.grid);
  }
};

});
