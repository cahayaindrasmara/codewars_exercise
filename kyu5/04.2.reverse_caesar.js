function reverseCaesar(message, n) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);

        if (code >= 97 && code <= 122) {
            result += String.fromCharCode((((code - 97 - n) % 26 + 26) % 26) + 97)
        } else if (code >= 65 && code <= 90) {
            result += String.fromCharCode((((code - 65 - n) % 26 + 26) % 26) + 65)
        } else {
            result += message[i]
        }
    }

    return result;
}

console.log(reverseCaesar("c", 1));
console.log(reverseCaesar("d", 2));
console.log(reverseCaesar("Z", 1));
console.log(reverseCaesar("a-b", 3));
