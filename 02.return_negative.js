function makeNegative(num) {
    if (num === 0) {
        return 0;
    }

    if (num < 0) {
        return num;
    }

    let negative = -num;

    return negative;
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));