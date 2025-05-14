function binToDec(bin) {
    let result = 0;
    let pow = 0;

    for (let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] === "1") {
            result += 2 ** pow;
        }
        pow++
    }

    return result;

    //kiss
    // return parseInt(bin,2);
}

console.log(binToDec('1001001')) //73
console.log(binToDec('0')) //0
console.log(binToDec('1')) //1
console.log(binToDec('10')) //2

