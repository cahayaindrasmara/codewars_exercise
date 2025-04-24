function SeriesSum(n) {
    let result = 0;
    let counter = 1;

    for (let i = 0; i < n; i++) {
        result += 1 / counter;
        counter += 3;
    }

    return result.toFixed(2);
}

console.log(SeriesSum(1)); //1.00
console.log(SeriesSum(2)); //1.25
console.log(SeriesSum(3)); //1.39
console.log(SeriesSum(4)); //1.49

