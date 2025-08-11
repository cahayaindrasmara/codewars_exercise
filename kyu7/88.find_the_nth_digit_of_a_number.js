function findDigit(num, nth) {
    if (nth <= 0) return -1;

    let digit = Math.abs(num).toString().split("").map(Number).reverse();

    if (nth > digit.length) return 0;

    return digit[nth - 1]
}

console.log(findDigit(5673, 4));
console.log(findDigit(-2825, 3));
console.log(findDigit(129, 2));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
