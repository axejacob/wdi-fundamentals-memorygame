
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
    cardImage: "images/king-of-hearts.pn"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];

function flipCard(cardId){
console.log("User flipped " + cards[cardId].rank);
if (cardsInPlay.length === 2) {
console.log("There are 2 cards");
}

if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
    alert("Sorry try again.");
}
};

cardsInPlay.push(cards[cardId]);

function flipCard(){
    console.log(0);
};

function flipCard(){
    console.log(2);
};

console.log("cardImage");