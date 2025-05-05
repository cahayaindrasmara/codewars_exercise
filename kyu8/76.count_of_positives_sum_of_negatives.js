function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return []
    }

    let countPositive = 0;
    let sumNegatif = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            //       console.log(input[i])
            countPositive++
        } else {
            sumNegatif += input[i]
        }
    }

    return [countPositive, sumNegatif]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[ 10, -65 ]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) //[ 8, -50 ]
