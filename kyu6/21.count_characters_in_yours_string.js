function count(string) {
    let count = {};
    for (let char of string) {
        r = count[char] = (count[char] || 0) + 1
    }
    return count;
}

console.log(count("")); //{}
console.log(count("a")); //{ a: 1 }
console.log(count("ab")); //{ a: 1, b: 1 }
console.log(count("aba")); //{ a: 2, b: 1 }
console.log(count("ABC")); //{ A: 1, B: 1, C: 1 }