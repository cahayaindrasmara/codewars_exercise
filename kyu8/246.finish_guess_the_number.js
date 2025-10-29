class Guesser {
    constructor(number, lives) {
        this.lives = lives;
        this.number = number;
    }

    guess(n) {
        if (this.lives <= 0) {
            throw new Error("error already dead");
        }

        if (this.number === n) {
            return true;
        } else {
            this.lives--
            return false
        }
    }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(2))
// console.log(guesser.guess(2))
// console.log(guesser.guess(10))
console.log(guesser.guess(10))
