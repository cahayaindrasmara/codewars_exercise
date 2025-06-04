function multiply(number) {
    let count = 0;
    let increment = 0;
    let currentNumber = Math.abs(number);

    while (currentNumber > 0) {
        // console.log(currentNumber);
        currentNumber = Math.floor(currentNumber / 10);
        increment++
    }

    count = number * Math.pow(5, increment)
    return count;
}

console.log(multiply(200)) //2500
console.log(multiply(10)) //250
console.log(multiply(0)) //0
console.log(multiply(-2)) //-10
console.log(multiply(-350)) //-43750

