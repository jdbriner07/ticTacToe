var ticTacToe = function() {
	this.board = [['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']];
};

ticTacToe.prototype.drawBoard = function() {
	let boardCopy = JSON.parse(JSON.striginfy(this.board));
	boardCopy.forEach( (row) => {
		row.join('|');
	})
  boardCopy.join('\n');
  return boardCopy;
}

ticTacToe.prototype.ChangePosition = function(row, col, player) {
  var piece;
  if (player === 'player1') {
    piece = 'X';
  } else if (player === 'player2') {
    piece = 'O';
  }
  if (this.board[row][col] === '#') {
    this.board[row][col] = piece;
  }
}

ticTacTow.prototype.gameOver = function() {
  var winner;
  board = this.board;
  board.forEach( row => {
    if (row[0] === row[1] && row[0] === row[2]) {
      if (row[0] === 'O') {
        winner = 'player2';
      } else if (row[0] === 'X') {
        winner = 'player1';
      }
    }
  });
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      if (board[0][i] === 'O') {
        winner = 'player2';
      } else if (board[0][i] === 'X') {
        winner = 'player1';
      }
    }
  };
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    if (board[0][0] === 'O') {
      winner = 'player2';
    } else if (board[0][0] === 'X') {
      winner = 'player1';
    }
  }
  return winner;
}

