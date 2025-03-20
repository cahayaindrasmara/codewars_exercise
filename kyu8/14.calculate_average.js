function findAverage(array) {
    let result = 0;
    if (array.length === 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        result += array[i];
    }

    return result / array.length;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));
