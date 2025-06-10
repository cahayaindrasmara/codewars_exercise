function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError();

    if (n === 0) return 1;

    result = 1;

    for (let i = n; i > 0; i--) {
        result *= i;
    }

    return result;

    // kiss menggunakan rekursif
    // return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
// console.log(factorial(13));

