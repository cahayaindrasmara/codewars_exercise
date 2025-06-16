function sumTriangularNumbers(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i * ((i + 1) / 2)
    }
    return sum;
}

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));
console.log(sumTriangularNumbers(-291));
