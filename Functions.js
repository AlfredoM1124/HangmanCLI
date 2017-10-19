// Declaring dependency
var letters = require("./Letters.js");

// Functions that will be exported to 'Hangman.js'

var Word = function(solution){
	this.solution = solution;
	this.characterCount = solution.length;
	this.reveal = "";
	this.letters = [];
	// 
	this.revealCharacter = function() {
		this.reveal = "";
		for (var i = 0; i < this.letters.length; i++) {
			this.reveal += this.letters[i].reveal + " ";
		}
	};
	// Once user guesses a letter the Character will be revealed
	this.letterGuess = function(guess) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].check(guess);
		}
		this.revealCharacter();
	};

}