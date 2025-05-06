function expandedForm(num) {
    const result = [];
    let x = num;

    for (let i = 0; x > 0; i++) {
        let currentDigit = x % 10;
        console.log(currentDigit);

        if (currentDigit !== 0) {
            result.push(Math.pow(10, i) * currentDigit);
        }
        console.log("result:", result);

        x = Math.floor(x / 10);
    }

    return result.reverse().join(" + ")
}

console.log(expandedForm(70304)); //70000 + 300 + 4
console.log(expandedForm(12)); //2
console.log(expandedForm(42));