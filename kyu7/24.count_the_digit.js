function nbDig(n, d) {
    let count = 0;
    let square = [];
    const digit = d.toString();

    for (let i = 0; i <= n; i++) {
        square.push(i * i);
    }

    for (let number of square) {
        // console.log(number)
        numStr = number.toString();
        for (let char of numStr) {
            // console.log(char)
            if (char === digit) count++
        }
    }
    return count;
}

console.log(nbDig(5750, 0)); //4700
console.log(nbDig(11011, 2)); //9481
console.log(nbDig(12224, 8)); //7733
console.log(nbDig(11549, 1)); //11905