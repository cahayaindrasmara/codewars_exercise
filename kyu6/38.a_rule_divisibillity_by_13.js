function thirt(n) {
    let pattern = [1, 10, 9, 12, 3, 4];
    let prev = -1;

    while (n !== prev) {
        prev = n;
        let sum = 0;
        let digits = n.toString().split("").reverse();

        for (let i = 0; i < digits.length; i++) {
            const digit = Number(digits[i]);
            const multiplier = pattern[i % pattern.length];
            sum += digit * multiplier;
            console.log("Digit:", digit, "*", multiplier, "=", digit * multiplier)
        }

        n = sum;
        console.log("sum:", sum)
    }

    return n;
}

console.log(thirt(8529)); //79
console.log(thirt(85299258)); //31
console.log(thirt(5634)); //57
console.log(thirt(1111111111)); //71
console.log(thirt(987654321)); //30
