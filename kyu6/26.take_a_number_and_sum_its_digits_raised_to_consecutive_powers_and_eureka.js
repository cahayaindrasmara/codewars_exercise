function sumDigPow(a, b) {
    let eureka = [];

    for (let i = a; i <= b; i++) {
        // console.log(i)
        const digits = String(i).split("").map(Number);
        // console.log(digits)

        let sum = 0;

        for (let j = 0; j < digits.length; j++) {
            // console.log(digits[j])
            sum += digits[j] ** (j + 1);
        }
        // console.log("sum:", sum);

        if (sum === i) {
            eureka.push(i)
        }
    }
    return eureka;
}

console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)); // [89]
console.log(sumDigPow(90, 100)); // []
console.log(sumDigPow(90, 150)); // [135]