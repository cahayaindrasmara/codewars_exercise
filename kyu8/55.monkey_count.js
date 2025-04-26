function monkeyCount(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        result.push(i)
    }
    return result;
}

console.log(monkeyCount(5));
console.log(monkeyCount(3));
console.log(monkeyCount(9));
console.log(monkeyCount(10));
console.log(monkeyCount(20));