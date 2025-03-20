function squareSum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        result += numbers[i] ** 2;
    }

    return result;
}

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0