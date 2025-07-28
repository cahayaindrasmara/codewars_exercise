function seven(m) {
    let steps = 0;

    while (m > 99) {
        const lastDigit = m % 10;
        const rest = Math.floor(m / 10);
        m = rest - 2 * lastDigit
        steps++
    }

    return [m, steps]
}

console.log(seven(1021)); //[10,2]
console.log(seven(371)); //[35,1]
console.log(seven(10)); //[10]
