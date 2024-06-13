let firstCard = Math.random() * 15;
let secondCard = Math.random() * 15;
let sum = Math.ceil(firstCard) + Math.ceil(secondCard);
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.querySelector("#cards")
console.log(sum);

function start() {

    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards : " + Math.ceil(firstCard) + " + " + Math.ceil(secondCard);


    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Woo-hoo! You've got Blackjack!";

    } else {
        message = "Sorry, you've busted! Better luck next time.";
        isAlive = false;

    }
    messageEl.textContent = message;


}