console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
//Idiot,[1]-> var cardInPlay[here is cardOne, now is cardTwo]

if (cardsInPlay.length === 2) {
console.log("There are 2 cards");
}

if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
    alert("Sorry try again.");
}