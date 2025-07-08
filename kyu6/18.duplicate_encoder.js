function duplicateEncode(word) {
    let lowerCase = word.toLowerCase();
    let chars = {};
    let result = "";

    for (let i = 0; i < lowerCase.length; i++) {
        chars[lowerCase[i]] = (chars[lowerCase[i]] || 0) + 1;
    };

    for (let i = 0; i < lowerCase.length; i++) {
        if (chars[lowerCase[i]] > 1) {
            result += ")"
        } else {
            result += "("
        }
    }

    console.log(chars)
    return result;
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((