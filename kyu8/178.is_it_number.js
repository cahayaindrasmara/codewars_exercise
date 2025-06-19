function isDigit(s) {
    // console.log(s.trim())
    return (!isNaN(s) && s.trim() !== "");

    //return parseFloat(s) === Number(s)
}

// console.log(isDigit("3")); //true
// console.log(isDigit("  3  ")); //true
// console.log(isDigit("-3.23")); //true
// console.log(isDigit("3-4")); //false
console.log(isDigit("  3   5")); //false
// console.log(isDigit("3   5")); //false
// console.log(isDigit("zero")); //false
// console.log(isDigit("-0")); //true
// console.log(isDigit("34.65")); //true