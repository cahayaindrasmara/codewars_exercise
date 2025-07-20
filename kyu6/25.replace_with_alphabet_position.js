function alphabetPosition(text) {
    // let result = [];

    // for (let i = 0; i < text.length; i++) {
    //     let char = text[i].toLowerCase();
    //     let code = char.charCodeAt(0);

    //     if (code >= 97 && code <= 122) {
    //         result.push(code - 96);
    //     }
    // }

    // return result.join(" ");

    //another way
    let letter = text.toLowerCase();
    let result = [];

    for (let i = 0; i < letter.length; i++) {
        let char = letter[i];

        if (/[a-zA-Z]/.test(char)) {
            let code = char.charCodeAt(0) - 96;
            result.push(code)
        }
    }
    return result.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) //20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
console.log(alphabetPosition("abcdefghij")) //1 2 3 4 5 6 7 8 9 10
