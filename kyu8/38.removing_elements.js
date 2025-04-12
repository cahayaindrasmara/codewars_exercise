function removeEveryOther(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[i])
        }
    }

    return result;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([1, 2]));
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]));