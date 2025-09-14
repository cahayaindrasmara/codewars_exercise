function vowel2index(str) {
    return str.split("").map((char, index) => char.replace(/[aiueo]/i, index + 1)).join("");
    //   return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}

console.log(vowel2index('this is my string'));
console.log(vowel2index('Codewars is the best site in the world'));
console.log(vowel2index('Tomorrow is going to be raining'));
console.log(vowel2index(''));


