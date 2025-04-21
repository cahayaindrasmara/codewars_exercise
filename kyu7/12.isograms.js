function isIsogram(str) {
    let lowerCase = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (lowerCase[i] === lowerCase[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("isogram")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram("")); //true