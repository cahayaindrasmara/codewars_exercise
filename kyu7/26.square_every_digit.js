function squareDigits(num) {
    let numStr = num.toString();
    let pow = [];

    for (let i = 0; i < numStr.length; i++) {
        let number = +numStr[i];
        pow.push(number ** 2);
    }

    return +pow.join("");

    // return +num.toString().split('').map(i => i*i).join('');
}

console.log(squareDigits(3212)); //9414
console.log(squareDigits(2112)); //4114
console.log(squareDigits(0)); //0