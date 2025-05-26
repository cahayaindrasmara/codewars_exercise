function plural(n) {
    // return n > 1 || n >= 0 && n < 1;
    return n !== 1;
}

console.log(plural(0)); //true
console.log(plural(0.5)); //true
console.log(plural(1)); //false
console.log(plural(100)); //true
console.log(plural(Infinity)); //true