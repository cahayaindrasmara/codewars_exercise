function digPow(n, p) {
    let digit = n.toString().split("").map(Number);
    // console.log(digit);

    let numPow = [];

    for (let i = 0; i < digit.length; i++) {
        numPow.push(digit[i] ** p);
        p++
    }

    // console.log(numPow)

    let sum = numPow.reduce((a, b) => a + b, 0);
    // console.log(sum);

    let k = 0;
    if (sum % n === 0) {
        k = sum / n
    } else {
        k = -1
    }

    return k
}

console.log(digPow(89, 1)); //1
console.log(digPow(695, 2)); //2
console.log(digPow(46288, 3)); //51
console.log(digPow(46288, 5)); //-1