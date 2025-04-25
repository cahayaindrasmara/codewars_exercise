function howMuchILoveYou(nbPetals) {
    let words = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let index = (nbPetals - 1) % 6;

    return words[index];
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));