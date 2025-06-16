function diamond(n) {
    if (n <= 0 || n % 2 === 0) return null;

    let pattern = "";
    let mid = Math.ceil(n / 2)
    console.log("mid:", mid)
    for (let i = 1; i <= n; i++) {
        let spaces = Math.abs(mid - i)
        console.log("spaces:", spaces)
        for (let j = 0; j < spaces; j++) {
            pattern += "-"
        }

        let stars = n - 2 * Math.abs(mid - i);
        console.log("stars:", stars)
        for (let k = 0; k < stars; k++) {
            pattern += "*"
        }

        pattern += "\n"
    }
    return pattern;
}

console.log(diamond(5))
// console.log(diamond(0))
// console.log(diamond(2))
// console.log(diamond(1))