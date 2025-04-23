function sortArray(array) {
    let oddNumber = [];
    let index = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === 1) {
            oddNumber.push(array[i])
        }
    }

    let sortNumber = oddNumber.sort(function (a, b) { return a - b })

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 === 1) {
            result.push(sortNumber[index]);
            index++
        } else {
            result.push(array[i])
        }
    }
    console.log(oddNumber);
    console.log(result);
    return result;

}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));