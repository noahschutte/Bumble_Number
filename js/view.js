var BoardView = function() {
  for (var i = 0; i < 4; i++) {
    $('#boardView').append('<tr class="row-' + i + '"></tr>');
  }
  for (var count = 0; count < 4; count++) {
    for (var c = 0; c < 4; c++) {
      $('.row-' + count).append('<td class="col-' + c + '"></td>');
    }
  }
};

BoardView.prototype.renderBoard = function(grid) {
    var currentTile;
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      currentTile = $('#boardView .row-' + r + ' .col-' + c);
      if (grid[r][c] === "X") {
        currentTile.text("");
        currentTile.css("background-color", "white")
      } else {
        currentTile.text(grid[r][c]);
        if (currentTile.text() == 2) {
            currentTile.css("background-color", "gray")
        } else if (currentTile.text() == 4) {
            currentTile.css("background-color", "yellow")
        } else if (currentTile.text() == 8) {
            currentTile.css("background-color", "orange")
        } else if (currentTile.text() == 16) {
            currentTile.css("background-color", "green")
        } else if (currentTile.text() == 32) {
            currentTile.css("background-color", "blue")
        } else if (currentTile.text() == 64) {
            currentTile.css("background-color", "purple")
        } else if (currentTile.text() == 128) {
            currentTile.css("background-color", "purple")
        } else if (currentTile.text() == 256) {
            currentTile.css("background-color", "silver")
        } else if (currentTile.text() == 512) {
            currentTile.css("background-color", "gold")
        } else if (currentTile.text() == 1024) {
            currentTile.css("background-color", "white")
        } else if (currentTile.text() == 2048) {
            currentTile.css("background-color", "white")
        } else if (currentTile.text() == 4096) {
            currentTile.css("background-color", "white")
        }
      }
    }
  }
};

BoardView.prototype.gameOver = function() {
  alert("Game Over");
};
