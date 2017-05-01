var ticTacToe = function() {
	this.board = [['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']];
  this.player = 'player1';
};

ticTacToe.prototype.drawBoard = function() {
	let boardCopy = JSON.parse(JSON.stringify(this.board));
	boardCopy.forEach( (row, i) => {
		boardCopy[i] = row.join('|');
	})
  return boardCopy.join('\n');
}

ticTacToe.prototype.changePosition = function(row, col, player) {
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

ticTacToe.prototype.gameOver = function() {
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

ticTacToe.prototype.reset = function() {
  this.board = [['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']];
  this.player = 'player1';
}

ticTacToe.prototype.move = function(row, col) {
  //get the current player to chase a space;
  this.changePosition(1, 1, this.player);
  if (this.player === 'player1') {
    this.player = 'player2';
  } else if (this.player === 'player2') {
    this.player = 'player1';
  }
  var winner = this.gameOver;
  if (winner) {
    this.reset;
    return winner + 'is the winner! \n' + this.drawBoard;
  }
  return this.player + '\'s turn. \n' + this.drawBoard;
}

module.exports = ticTacToe;