function vowelIndices(word) {
    let vowelsIndex = [];

    for (let i = 0; i < word.length; i++) {
        if ("aiueoy".includes(word[i].toLowerCase())) {
            vowelsIndex.push(i + 1);
        }
    }

    return vowelsIndex;
}

console.log(vowelIndices("super")); //[2,4]
console.log(vowelIndices("LikEy")); //[2,4,5]
console.log(vowelIndices("Mmm")); //[]
console.log(vowelIndices("")); //[]



