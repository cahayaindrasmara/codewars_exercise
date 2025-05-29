function validPass(string) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(string);
}

console.log(validPass("fjd3IR9"))
console.log(validPass("ghdfj32"))
console.log(validPass("fDSJKHD23"))
console.log(validPass("dsF43"))
console.log(validPass("djI3_8D55"))
console.log(validPass("djI38D55@@"))
console.log(validPass("djI38D55@@"))



