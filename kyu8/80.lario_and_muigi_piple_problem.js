function pipeFix(numbers) {
    let result = [];
    console.log(numbers[0]);
    console.log(numbers[numbers.length - 1])

    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        // console.log(i)
        result.push(i)
    }

    return result
}

console.log(pipeFix([1, 2, 3, 5, 6, 9])); //[1,2,3,4,5,6,7,8,9]