function digPow(n, p) {
    let digit = n.toString().split("").map(Number);
    // console.log(digit);
    let sum = 0;

    for (let i = 0; i < digit.length; i++) {
        let num = Math.pow(digit[i], p++);
        // console.log(num)
        sum += num;
    }

    // console.log("sum:", sum);

    let k = -1;

    return sum % n === 0 ? sum / n : k;

    //kiss
    /*
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
    */
}

// console.log(digPow(89, 1)); //1
// console.log(digPow(695, 2)); //2
console.log(digPow(46288, 3)); //51
// console.log(digPow(46288, 5)); //-1 