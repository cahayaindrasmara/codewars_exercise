function min(arr, toReturn) {
    let min = arr[0];
    let indexMin = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            indexMin = i
        }
    }

    return toReturn === "value" ? min : indexMin;
}

console.log(min([1, 2, 3, 4, 5], 'value')); //1
console.log(min([1, 2, 3, 4, 5], 'index')); //0
console.log(min([500, 250, 750, 5000, 1000, 230], 'value')); //230
console.log(min([500, 250, 750, 5000, 1000, 230], 'index')); //5