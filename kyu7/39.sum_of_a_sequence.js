const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0
    }

    let result = 0;
    for (let i = begin; i <= end; i += step) {
        console.log(i)
        result += i
    }

    return `hasil ${result}`
}

console.log(sequenceSum(2, 2, 2)); //2
console.log(sequenceSum(2, 6, 2)); //12
console.log(sequenceSum(1, 5, 1)); //15
console.log(sequenceSum(1, 5, 3)); //5