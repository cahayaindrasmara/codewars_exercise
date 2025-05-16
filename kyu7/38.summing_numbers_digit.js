function sumDigits(number) {
    let digit = number.toString().split("").map(Number) // keep it simple stupid, ubah number nya jadi absolut
    console.log(digit)

    let sum = 0

    for (let number of digit) {
        // sum += number;
        // console.log(isNaN(Number))
        if (!Number.isNaN(number)) {
            sum += number
        }
    }
    // console.log(sum)
    return sum;
}

console.log(sumDigits(-320))
