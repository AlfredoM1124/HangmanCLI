// Declaring dependency
var Letters = require("./Letters.js");

// Functions that will be exported to 'Hangman.js'

var Word = function(solution){
	this.solution = solution;
	this.characterCount = solution.length;
	this.reveal = "";
	this.letters = [];
	// Evaluates the user's guess and alerts 
	this.evaluateGuess = function(error){
		if (error === 0){
			console.log("That's right! Amazing!");
		}
		// Repeated guesses
		else if (error === -1) {
			console.log("You've got a short memory, I see! Try Again!");
		}
		else {
			console.log("Nope, wrong answer! Try again!");
		}
		this.revealCharacter();
	};
	// 
	this.revealCharacter = function() {
		this.reveal = "";
		for (var i = 0; i < this.letters.length; i++) {
			this.reveal += this.letters[i].reveal + " ";
		};
		// console.log(this.reveal)
	};
	// Once user guesses a letter the Character will be revealed
	this.letterGuess = function(guess) {
		// Counter determines what happens after an answer is chosen.
		var turnCounter = 1;
		// Sorts through the letters array to evaluate the user guess.
		for (var i = 0; i < this.letters.length; i++) {
			
			var guessedLetter = this.letters[i].check(guess);
			
			if (guessedLetter === true) {
				this.characterCount--
				turnCounter = 0;
			};
			else {
				turnCounter--;
				this.message(turnCounter);
				return 0;
			};
		};
		this.evaluateGuess(turnCounter);
		return turnCounter;
	};

module.exports = Word;