var program = require('commander');
var ticTacToe = require('./Game/Game.js');

var Game = new ticTacToe();

program
	.version('0.0.1')
	.arguments('<row> <col>')
	.action(function(row, col) {
		Game.move(row, col);
	})