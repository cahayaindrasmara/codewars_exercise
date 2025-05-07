function rot13(message) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        // console.log(code)

        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + 13) % 26) + 97)
        } else if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + 13) % 26) + 65)
        } else {
            result += message[i]
        }
    }

    return result;
}

console.log(rot13("test")); //grfg
console.log(rot13("Test")); //Grfg
console.log(rot13("Codewars")); //Pbqrjnef
console.log(rot13("Ruby is cool!")); //Ehol vf pbby!