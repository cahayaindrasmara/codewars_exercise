function isPowerOfTwo(n) {
    if (n < 1) return false;

    while (n % 2 === 0) {
        n /= 2;
        console.log(n)
    }

    return n === 1;
}

console.log(isPowerOfTwo(4096)); //true
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(234)); //false