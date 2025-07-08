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

    //kiss
    // if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){}
    /*
    let word = "recede"
    word[1] = "e"

    word.indexOf("e")     // 1
    word.lastIndexOf("e") // 5

    // Tidak sama → berarti "e" muncul lebih dari sekali

    let word = "recede"
    word[0] = "r"

    word.indexOf("r")     // 0
    word.lastIndexOf("r") // 0

    // Sama → berarti "r" hanya muncul sekali
    */
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((