function contamination(text, char) {
    let mutated = ""
    for (let i = 0; i < text.length; i++) {
        mutated += char;
    }

    return mutated;

    //kiss
    //return char.repeat(text.length)
}

console.log(contamination("abc", "z")); //zzz
console.log(contamination("", "z")); //""
console.log(contamination("abc", "")); //""
console.log(contamination("_3ebzgh4", "&")); //&&&&&&&&