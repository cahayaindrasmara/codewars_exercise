function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(0));
console.log(isSquare(25));
console.log(isSquare(26));
console.log(isSquare(10));
