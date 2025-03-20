function getSum(a, b) {
    if (a === b) {
        return a;
    }


    let result = 0;
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        result += i;
    }

    return result;
}

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
console.log(getSum(-1, 2)); // 2
console.log(getSum(5, -1)); // 14