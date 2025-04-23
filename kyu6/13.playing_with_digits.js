function digPow(n, p) {
    let digit = n.toString().split("").map(Number);
    console.log("digit:", digit)

    let digitPow = 0;
    let sumDigitPow = 0;

    for (let i = 0; i < digit.length; i++) {
        digitPow = Math.pow(digit[i], p++);
        console.log("digit pow:", digitPow)

        sumDigitPow += digitPow
    }
    console.log("sum:", sumDigitPow)

    let k = 0;

    if (sumDigitPow % n === 0) {
        k = sumDigitPow / n;
    } else {
        k = -1
    }

    return k;
}

console.log(digPow(89, 1)); //1
console.log(digPow(92, 1)); //-1
console.log(digPow(46288, 3)); //51