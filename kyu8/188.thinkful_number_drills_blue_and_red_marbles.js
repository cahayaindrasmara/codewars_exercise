function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueRemaining = blueStart - bluePulled;
    let redRemaining = redStart - redPulled;
    let totalRemaining = blueRemaining + redRemaining;

    let probability = blueRemaining / totalRemaining;
    return Number(probability.toFixed(1));
}

console.log(guessBlue(5, 5, 2, 3)); //0.6
console.log(guessBlue(5, 7, 4, 3)); //0.2
console.log(guessBlue(12, 18, 4, 6)); //0.4