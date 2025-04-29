function duplicateEncode(word) {
    let result = "";
    let lowerCase = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        let count = 0;
        console.log("#1:", word[i]);
        for (let j = 0; j < word.length; j++) {
            console.log("#2:", word[j])
            if (lowerCase[i] === lowerCase[j]) {
                count++
            }
        }
        if (count === 1) {
            result += "(";
        } else {
            result += ")"
        }
    }
    return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success")); //)())())
console.log(duplicateEncode("(( @")); //))((