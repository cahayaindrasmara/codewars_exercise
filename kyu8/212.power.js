function numberToPower(number, power) {
    let result = 1;

    if (power === 0) return 1;

    while (power > 0) {
        result *= number;
        power--
    }

    return result;
}

console.log(numberToPower(3, 2)); //9
console.log(numberToPower(10, 0)); //1