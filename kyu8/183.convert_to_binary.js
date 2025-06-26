function toBinary(n) {
    // let result = "";

    // while (n > 0) {
    //     let remainder = n % 2;
    //     result = remainder + result;
    //     n = Math.floor(n / 2);
    // }

    // return +result;

    return +n.toString(2)
}

console.log(toBinary(5)); //101
console.log(toBinary(1)); //1
console.log(toBinary(2)); //10