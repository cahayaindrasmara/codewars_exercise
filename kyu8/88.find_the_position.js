function position(letter) {
    let check = letter.charCodeAt(0) - 96;
    return `Position of alphabet: ${check}`
}

console.log(position("a")); //1
console.log(position("z")); //26
console.log(position("e")); //5