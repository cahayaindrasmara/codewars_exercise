function invert(array) {
    if (array[0] === 0) {
        return array;
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])

        if (array[i] === Math.abs(array[i])) {
            result.push(-Math.abs(array[i]));
        } else {
            result.push(Math.abs(array[i]));
        }
    }

    return result;
}

console.log(invert([1, 2, 3, 4, 5])); //[ -1, -2, -3, -4, -5 ]
console.log(invert([1, -2, 3, -4, 5])); //[ -1, 2, -3, 4, -5 ]
console.log(invert([])); //[]
console.log(invert([0])); //[0]