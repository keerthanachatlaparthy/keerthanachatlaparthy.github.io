function buildCards(asArray = true) {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    const packArr = []
    const packObj = {}


    for (let k = 0; k < suits.length; k++) {
        for (let j = 0; j < values.length; j++) {
            let packarr = values[j] + " of " + suits[0]
            packArr.push(packarr)
            packObj[packarr] = j + 1
        }
    }
    if (!asArray) {
        return packObj;
    }
    return packArr;
}
class Deck {
    constructor() {
        this.deck = [];
        this.reset(); //Add 52 cards to the deck
        this.shuffle(); //Suffle the deck
    }
    reset() {
        this.deck = [];
        this.deck = buildCards(true);
    }
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
        return this.deck;
    }
    deal() {
        return this.deck.pop();

    }
    isEmpty() {
        // return (this.deck.length == 0);
        return 0 == this.deck.length
    }
    length() {
        return this.deck.length;
    }
}
class Card {
    constructor(card) {
        this.card = card;

        // Get all cards as an Object with key as card name and value as the number of the card
        const cardValues = buildCards(false);

        this.value = cardValues[card];
        this.suit = card.substring(card.indexOf(" of ") + 4);
        this.placeHolder = null;
        this.flipped = false;

        var suits = { 'Hearts': 0, 'Diamonds': 13, 'Clubs': 26, 'Spades': 39 }
        this.position = suits[this.suit] + this.value; //Position in a sorted deck
    } //End of Constructor

    /**
     * Method to display the card
     * @param {*} placeHolder 
     * @param {*} flipped 
     */
    displayCard(placeHolder, flipped = true) {
        this.placeHolder = document.getElementById(placeHolder);
        this.placeHolder.classList.add("card");
        this.flipped = flipped;
        if (flipped) {
            this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
        } else {
            this.placeHolder.style.backgroundPosition = "0px";
        }
    } // End of displayCard

    /**
     * Method to flip the card
     */
    flip() {
        if (this.flipped) {
            this.placeHolder.style.backgroundPosition = "0px";
            this.flipped = false;
        } else {
            this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
            this.flipped = true;
        }
    } //End of flip()

} //End of Card class
const deck = new Deck;
let card1, card2, playerCard1, playerCard2, playerCard3, playerCard4, playerTotal = 0,
    dealerTotal = 0;


function initialDeal() {
    if (deck.length() < 7) {
        deck.reset();
        deck.shuffle()
    }
    card1 = new Card(deck.deal());
    card2 = new Card(deck.deal());
    playerCard1 = new Card(deck.deal());
    playerCard2 = new Card(deck.deal());

    card1.displayCard("card1", true);
    card2.displayCard("card2", false);
    playerCard1.displayCard("playerCard1", true);
    playerCard2.displayCard("playerCard2", true);


    playerTotal = playerCard1.value + playerCard2.value;
    if (playerTotal === 21) {
        cuteAlert({
            type: "success",
            title: "Superb!!!",
            message: "Blackjacked !!!",
            buttonText: "Wohoo !!!",
            img: "success.svg"
        }).then(() => {
            location.reload()
        })

    }
}

function stand() {
    card2.flip();
    dealerTotal = card1.value + card2.value;
    if (playerTotal >= dealerTotal) {
        cuteAlert({
            type: "success",
            title: "Congratualtions !!!",
            message: "You won the Game",
            buttonText: "Yayy !",
            img: "success.svg"
        }).then(() => {
            location.reload()
        })
    }
    else {
        cuteAlert({
            type: "error",
            title: "Oh No !!!",
            message: "Dealer won the Game",
            buttonText: "Ok :(",
            img: "error.svg"
        }).then(() => {
            location.reload()
        })
    }
}
let extraCnt = 0;

function hit() {
    var dealButton = document.getElementById("deal");
    playerCard3 = new Card(deck.deal());
    playerCard4 = new Card(deck.deal());
    if (0 === extraCnt) {
        playerCard3.displayCard("playerCard3", true);
        playerTotal += playerCard3.value
    } else if (1 === extraCnt) {
        playerCard4.displayCard("playerCard4", true);
        playerTotal += playerCard4.value
    } else {
        e.style.display = "none";
        cuteAlert({
            type: "warning",
            title: "Sorry...",
            message: "Max. Cards dealed",
            buttonText: "OK",
            img: "warning.svg"
        })
    }
    if (21 < playerTotal) {
        cuteAlert({
            type: "error",
            title: "Busted...",
            message: "You lost the Game",
            buttonText: "OK",
            img: "error.svg"
        }).then(() => {
            location.reload()
        });
    } else 21 === playerTotal && cuteAlert({
        type: "success",
        title: "Superb!!!",
        message: "Blackjacked !!!",
        buttonText: "Wohoo !!!",
        img: "success.svg"
    }).then(() => {
        location.reload()
    });
    extraCnt++
}
initialDeal();