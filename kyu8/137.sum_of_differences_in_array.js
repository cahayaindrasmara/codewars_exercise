function sumOfDifferences(arr) {
    let num = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        num.push(arr[i])
    }
    console.log(num)

    let initial = num[0] - num[1]
    return num.slice(2).reduce((a, b) => Math.abs(a + b), initial)
}

console.log(sumOfDifferences([1, 2, 10])) //9