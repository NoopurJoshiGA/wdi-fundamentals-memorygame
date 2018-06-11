//test js file loads
console.log("Up and running!");

//create an array to hold the cards
var cards = ["queen", "queen", "king", "king"];

//create empty array to hold the cards in play
var cardsInPlay = [];

//function to check for a match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}

	else {
		console.log("Sorry, try again.");
	}
}

//create flipCard function
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);

//push the flipped card to the cardsInPlay array
cardsInPlay.push(cards[cardId]);

if(cardsInPlay.length === 2) {
	checkForMatch();
}
}

flipCard(0);
flipCard(2);





//create a function
//user flips card > add card to array > if 2 carsds are flipped check if they match









