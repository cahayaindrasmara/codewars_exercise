function checkForFactor(base, factor) {
    return base % factor === 0 ? true : false;
}

console.log(checkForFactor(10, 2)); //true
console.log(checkForFactor(9, 2)); //false