function addBinary(a, b) {
    let sum = a + b;

    let hasil = ""
    while (sum > 0) {
        let sisa = sum % 2;
        hasil += sisa;
        sum = Math.floor(sum / 2)
    }

    return hasil;

    //kiss -> return sum.toString(2)
}

console.log(addBinary(1, 1));
console.log(addBinary(2, 4));
