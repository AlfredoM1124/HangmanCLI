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


