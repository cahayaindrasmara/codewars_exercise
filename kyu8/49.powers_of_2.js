function powersOfTwo(n) {
    let result = [];

    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }

    return result;
}

console.log(powersOfTwo(0)); //[ 1 ]
console.log(powersOfTwo(1)); //[ 1, 2 ]
console.log(powersOfTwo(4)); //[ 1, 2, 4, 8, 16 ]