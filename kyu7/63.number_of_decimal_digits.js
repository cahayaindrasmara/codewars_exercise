function digits(n) {
    let length = n.toString().length
    return length;
}

console.log(digits(9)); //1
console.log(digits(66)); //2
console.log(digits(12345)); //5
console.log(digits(128685)); //6
console.log(digits(9876543210)); //10