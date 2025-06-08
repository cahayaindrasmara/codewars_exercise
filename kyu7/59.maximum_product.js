function adjacentElementsProduct(array) {
    let max = array[0] * array[1];

    for (let i = 1; i < array.length - 1; i++) {
        let beda = array[i] * array[i + 1];

        if (beda > max) {
            max = beda;
        }
    }

    return max;
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
