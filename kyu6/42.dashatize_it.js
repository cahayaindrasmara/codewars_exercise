function dashatize(num) {
    let result = ""
    let digits = Math.abs(num).toString();
    // console.log(digits);

    for (let i = 0; i < digits.length; i++) {
        let digit = +digits[i];
        // console.log(digit)

        if (digit % 2 === 1) {
            result += `-${digit}-`
        } else {
            result += digit;
        }
    }

    return result.replace(/--+/g, "-").replace(/^-|-$/g, "")
}

console.log(dashatize(6815));
console.log(dashatize(5311));
console.log(dashatize(274));