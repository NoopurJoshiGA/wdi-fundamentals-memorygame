//test js file loads
console.log("Up and running!");

//create an array of objects to hold the cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	path: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	path: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	path: "images/king-of-hearts.png" 
},
{
	rank: "king",
	suit: "diamonds",
	path: "images/king-of-diamonds.png"
}
];

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
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].path);
	console.log(cards[cardId].suit);

//push the flipped card to the cardsInPlay array
cardsInPlay.push(cards[cardId].rank);

if(cardsInPlay.length === 2) {
	checkForMatch();
}
}

flipCard(0);
flipCard(2);










