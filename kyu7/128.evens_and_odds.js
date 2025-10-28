function evensAndOdds(num) {
    if (num % 2 === 0) {
        return num.toString(2)
    } else {
        return num.toString(16)
    }
}

console.log(evensAndOdds(2)); //10
console.log(evensAndOdds(13)); //d
console.log(evensAndOdds(112800)); //11011100010100000
