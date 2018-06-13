//test js file loads
console.log("Up and running!");

//create an array of objects to hold the cards
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png" 
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//create empty array to hold the cards in play
var cardsInPlay = [];

//function to check for a match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}

	else {
		alert("Sorry, try again.");
	}
}

//create flipCard function
function flipCard() {
	//get the data-id of the card that is clicked
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

//push the flipped card to the cardsInPlay array
cardsInPlay.push(cards[cardId].rank);

this.setAttribute('src', cards[cardId].cardImage);

if(cardsInPlay.length === 2) {
	checkForMatch();
}
}

//create function to add images to the board
function createBoard() {
	for(i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

//flipCard(0);
//flipCard(2);











