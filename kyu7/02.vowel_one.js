function vowelOne(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (s[i] === "a" || s[i] === "i" || s[i] === "u" || s[i] === "e" || s[i] === "o"
            || s[i] === "A" || s[i] === "I" || s[i] === "U" || s[i] === "E" || s[i] === "O") {
            result += "1"
        } else {
            result += "0"
        }
    }
    return result;
}

console.log(vowelOne("vowelOne")); // "01010101"
console.log(vowelOne("123, arou")); // "000001011"