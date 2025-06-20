function rotN(message, n) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        console.log(code)

        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + n) % 26) + 97)
        } else if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + n) % 26) + 65)
        } else {
            result += message[i]
        }
    }

    return result;
}

console.log(rotN("test", 2)); //grfg
console.log(rotN("Test", 13)); //Grfg
console.log(rotN("Codewars", 1)); //Pbqrjnef
console.log(rotN("Ruby is cool!", 20)); //Ehol vf pbby!