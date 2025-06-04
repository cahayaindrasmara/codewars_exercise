function defineSuit(card) {
    if (card.includes("♣")) {
        return "clubs"
    } else if (card.includes("♦")) {
        return "diamonds"
    } else if (card.includes("♥")) {
        return "hearts"
    } else if (card.includes("♠")) {
        return "spades"
    }
}

console.log(defineSuit("3♣"))
console.log(defineSuit("Q♠"))
console.log(defineSuit("9♦"))
console.log(defineSuit("J♥"))
console.log(defineSuit("10♠"))
