function sumTwoSmallestNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    let num1 = numbers[0];
    let num2 = numbers[1]
    return num1 + num2;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); //24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); //16