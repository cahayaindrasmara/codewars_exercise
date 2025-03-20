function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i]
    }
    return result;
};

console.log(doubleChar("abcd"));
console.log(doubleChar("Adidas"));
console.log(doubleChar("1337"));
console.log(doubleChar("illuminati"));
console.log(doubleChar("123456"));
console.log(doubleChar("%^&*("));