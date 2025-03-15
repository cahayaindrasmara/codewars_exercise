function reverseWords(str) {
    splitWords = str.split(" ");
    // console.log(splitWords)

    let result = [];
    for (let i = 0; i < splitWords.length; i++) {
        // console.log(splitWords[i])
        let reverseWord = "";
        for (let j = splitWords[i].length - 1; j >= 0; j--) {
            // console.log(splitWords[i][j])
            reverseWord += splitWords[i][j]
        }
        result.push(reverseWord);
    }
    return result.join(" ");

    // keep it simple stupid
    // return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// ehT kciuq nworb xof spmuj revo eht yzal .god