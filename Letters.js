// Each letter object should either display an underlying character, or a blank placeholder 
// (such as an underscore), depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.

var letterGen = function (character, placeholder){
	this.letter = character;
	this.placeholder = placeholder;
};

// Method that checks input letter from CLI 
letterGen.prototype.check = function (guess){
	if (guess === this.placeholder) {
		return undefined;
	}
	else if (guess === this.letter) {
		this.placeholder = guess;
		return true;
	};
	else {
		return false;
	}
};

module.exports = letterGen;