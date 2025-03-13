function smash(words) {
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += ` ${words[i]}`
    }

    return result.trim();
    // return words.join(" ");
};

// or keep it simple stupid
// return words.join(" ");

console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));