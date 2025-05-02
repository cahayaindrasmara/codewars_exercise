function count(string) {
    let count = {};
    for (let i = 0; i < string.length; i++) {
        count[string[i]] = (count[string[i]] || 0) + 1;
    }
    return count;
}

console.log(count(""));
console.log(count("a"));
console.log(count("ab"));
console.log(count("aba"));
console.log(count("ABC"));