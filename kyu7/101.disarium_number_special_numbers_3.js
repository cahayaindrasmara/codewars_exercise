function disariumNumber(n) {
    let digit = n.toString().split("").map(Number);
    console.log(digit);

    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        sum += digit[i] ** (i + 1);
    }

    return sum === n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89));
console.log(disariumNumber(564));
