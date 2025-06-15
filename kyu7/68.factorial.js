function factorial(n) {
    let multiplied = 1;

    for (let i = 1; i <= n; i++) {
        multiplied *= i
    }

    return multiplied;
}

console.log(factorial(7)) //5040