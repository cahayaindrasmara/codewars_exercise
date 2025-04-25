function stray(numbers) {
    let number = {};

    for (let i = 0; i < numbers.length; i++) {
        number[numbers[i]] = (number[numbers[i]] || 0) + 1
    }

    // console.log(number)

    for (const result in number) {
        // console.log("object:", number[result])
        if (number[result] === 1) {
            return Number(result);
        }
    }

    // kiss
    // for (let i = 0; i < numbers.length; i++) {
    //     //     console.log("#1:", list[i])
    //     //     console.log("index of:", numbers.indexOf(numbers[i]));
    //     //     console.log("last index of:", numbers.lastIndexOf(numbers[i]));

    //     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
    //         return numbers[i]
    //     }
    // }
}

console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));