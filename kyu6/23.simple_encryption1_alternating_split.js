function encrypt(text, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        let oddChars = [];
        let evenChars = [];

        for (let j = 0; j < text.length; j++) {
            if (j % 2 === 0) {
                evenChars.push(text[j])
            } else {
                oddChars.push(text[j])
            }
        }
        console.log(oddChars, evenChars)
        result = evenChars.join("") + oddChars.join("")
        console.log(result)
        text = result;
    }
    return result;
}

function decrypt(encryptedText, n) {
    for (let i = 0; i < n; i++) {
        let firstHalf = encryptedText.slice(0, Math.floor(encryptedText.length / 2));
        let secondHalf = encryptedText.slice(Math.floor(encryptedText.length / 2));
        let combined = "";

        for (let j = 0; j < encryptedText.length; j++) {
            if (j % 2 === 0) {
                combined += secondHalf[Math.floor(j / 2)];
            } else {
                combined += firstHalf[Math.floor(j / 2)];
            }
        }

        console.log(combined);
        encryptedText = combined;
    }
    return encryptedText;
}

// console.log(encrypt("This is a test!", 0));
// console.log(encrypt("This is a test!", 1));
// console.log(encrypt("This is a test!", 2));
// console.log(encrypt("This is a test!", 3));
// console.log(encrypt("This is a test!", 4));
// console.log(encrypt("This is a test!", -1));

console.log(decrypt("hsi  etTi sats!", 1));