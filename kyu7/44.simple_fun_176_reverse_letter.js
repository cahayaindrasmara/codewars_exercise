function reverseLetter(str) {
    let char = str.match(/[a-z]/g);
    let letter = char.reverse().join("");

    return letter;
}
console.log(reverseLetter("krishan")); //nahsirk
console.log(reverseLetter("ultr53o?n")); //nortlu
console.log(reverseLetter("ab23c")); //cba
console.log(reverseLetter("krish21an")); //nahsirk