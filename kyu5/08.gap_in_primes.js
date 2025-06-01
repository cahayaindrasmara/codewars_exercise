function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function gap(g, m, n) {
    let prevPrime = null;

    for (let i = m; i <= n; i++) {
        // console.log(i)
        if (isPrime(i)) {
            // console.log(i);
            if (prevPrime !== null && i - prevPrime === g) {
                return [prevPrime, i]
            } else {
                prevPrime = i;
            }
        }
    }
    return null;
}

console.log(gap(2, 100, 110)) //[ 101, 103 ]
console.log(gap(4, 100, 110))// [ 103, 107 ]
console.log(gap(6, 100, 110)) //null
console.log(gap(8, 300, 400)) //[ 359, 367 ]
console.log(gap(10, 300, 400)) //[ 337, 347 ]