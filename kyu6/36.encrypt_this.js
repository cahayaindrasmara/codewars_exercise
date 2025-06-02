var encryptThis = function (text) {
    let words = text.split(" ");
    //   console.log(words)
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstCharCode = word.charCodeAt(0);

        if (word.length === 1) {
            result.push(firstCharCode);
        } else if (word.length === 2) {
            result.push(firstCharCode + word[1]);
        } else {
            let second = word[word.length - 1];
            let last = word[1];
            let middle = word.slice(2, -1);

            result.push(firstCharCode + second + middle + last);
        }

    }

    //   console.log(result)
    return result.join(" ")
}

console.log(encryptThis("A wise old owl lived in an oak")); //65 119esi 111dl 111lw 108dvei 105n 97n 111ka
console.log(encryptThis("A")) //65
console.log(encryptThis("Hello world")) //72olle 119drlo
console.log(encryptThis("Ha")) //72a