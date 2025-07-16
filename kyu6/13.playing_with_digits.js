function digPow(n, p) {
    let sum = null;
    let digit = n.toString().split("").map(Number);
    console.log(digit);

    for (let i = 0; i < digit.length; i++) {
        sum += Math.pow(digit[i], p);
        p++
    }

    console.log("totalSum:", sum);

    let k = null;
    if (sum % n === 0) {
        k = sum / n;
    } else {
        k = -1;
    }

    return k
}

// console.log(digPow(89, 1)); //1
// console.log(digPow(695, 2)); //2
console.log(digPow(46288, 3)); //51
// console.log(digPow(46288, 5)); //-1