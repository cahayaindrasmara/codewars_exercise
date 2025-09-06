const orderedCount = function (text) {
    //   console.log(text)
    //   let countChar = {}
    //   let result = []

    //   for (let i = 0; i < text.length; i++) {
    //     countChar[text[i]] = (countChar[text[i]] || 0) + 1
    //   }

    //   for (let char in countChar) {
    // //     console.log(countChar[char], char);
    //     result.push([char, countChar[char]])
    //   }

    //   console.log(countChar)
    // //   console.log(result);
    //   return result;

    let countChar = new Map();

    for (let char of text) {
        countChar.set(char, (countChar.get(char) || 0) + 1);
    }

    let result = [];
    for (let [char, count] of countChar.entries()) {
        result.push([char, count]);
    }

    return result;
}

console.log(orderedCount("abracadabra"));
console.log(orderedCount("233312"));