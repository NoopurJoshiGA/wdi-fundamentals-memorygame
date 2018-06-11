//test js file loads
console.log("Up and running!");

//create an array to hold the cards
var cards = ["queen", "queen", "king", "king"];

//create empty array to hold the cards in play
var cardsInPlay = [];

//declare variable for first card selected
var cardOne = cards[0];
cardsInPlay.push(cardOne);

//test (it should show queen)
console.log("User flipped " + cardsInPlay);

//declare variable for the second card selected (in this case it's the 3rd card)
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

//test (it should show king)
console.log("User flipped " + cardsInPlay[1]);

//check if user has picked 2 cards
if(cardsInPlay.length === 2) {
	console.log("true");
}

else { 
	console.log ("false");
}

//check if there is a match
if(cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}

else {
	alert("Sorry, try again.");
}


