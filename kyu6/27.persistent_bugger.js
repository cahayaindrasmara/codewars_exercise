function persistence(num) {
    let digits = String(num).split("").map(Number);
    let step = 0;

    while (digits.length > 1) {
        let sum = 1;
        for (let i = 0; i < digits.length; i++) { // kiss menggunakan reduce
            sum *= digits[i];
        }
        digits = String(sum).split("").map(Number);
        console.log(digits);
        step++
    }
    return step;
}

console.log(persistence(39)); //3
console.log(persistence(4)); // 0
console.log(persistence(25)); //2
console.log(persistence(999)); //4