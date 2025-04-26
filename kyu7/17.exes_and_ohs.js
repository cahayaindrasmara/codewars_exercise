function XO(str) {
    let countX = 0;
    let countO = 0;
    let word = str.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "x") {
            countX++
        } else if (word[i] === "o") {
            countO++
        }
    }

    if (countX !== countO) {
        return false;
    }

    return true;
}

console.log(XO('XO')); //true
console.log(XO('xxxoo')); //false