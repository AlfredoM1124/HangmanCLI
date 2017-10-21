var functions = require("./Functions.js");
var inquirer = require("inquirer");

// Calls wordShuffle method from Functions.js wordArray object.
functions.wordArray.wordShuffle();
// Counter for the wordArray 
var counter = 0;
// Guesses left before game ends
var guesses = 7;

var word = new functions(wordArray.words[counter]);

word.splitWord();

inquirer.prompt();

var startGame = function() {
	if (guesses > 0 && word.characterCount > 0) {

		console.log("Guesses remaining: " + guesses + "\nLetters remaining: " + word.characterCount);
		// Uses inquirer to prompt user for respones
		inquirer.prompt("guess", function(err, res){
			var guessResult = word.letterGuess(res.guess);
			guesses -= guessResult;
			// Launch the game again
			startGame();
		});
	}
}
