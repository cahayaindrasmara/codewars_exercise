function highAndLow(numbers) {
    // console.log(numbers)

    const number = numbers.split(" ").map(Number);
    console.log(number);

    let min = number[0];
    console.log(min)
    let max = number[0];
    console.log(max)

    for (let i = 1; i < number.length; i++) {
        if (number[i] > max) {
            max = number[i]
        }

        if (number[i] < min) {
            min = number[i]
        }
    }

    return `${max} ${min}`

    /*
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;

    keep it simple stupid
    */
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
console.log(highAndLow("1 2 3")); "3 1"