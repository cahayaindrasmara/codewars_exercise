function findNextSquare(sq) {
    let square = Math.sqrt(sq);

    if (Number.isInteger(square)) {
        return Math.pow(square + 1, 2);
    } else {
        return -1
    }

    // kiss
    //let result = square % 1 !== 0 ? -1 : (square + 1) ** 2
}

console.log(findNextSquare(121)); //144
console.log(findNextSquare(625)); //676
console.log(findNextSquare(319225)); //320356
console.log(findNextSquare(15241383936)); //15241630849
console.log(findNextSquare(155)); //-1
console.log(findNextSquare(342786627)); //-1