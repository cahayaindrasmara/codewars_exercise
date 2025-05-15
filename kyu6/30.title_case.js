function titleCase(title, minorWords) {
    if (!title) {
        return ""
    }


    let text = title.toLowerCase().split(" ");
    let minor = minorWords ? minorWords.toLowerCase().split(" ") : []
    let result = []

    console.log(text);
    console.log(minor);

    for (let i = 0; i < text.length; i++) {
        // console.log(text[i])
        let word = text[i]
        let isMinor = false;

        for (let j = 0; j < minor.length; j++) {
            // console.log(minor[j])

            if (word === minor[j]) {
                isMinor = true;
                break;
            }
        }

        if (i === 0 || !isMinor) {
            word = word[0].toUpperCase() + word.slice(1)
        }
        result.push(word)
    }

    return result.join(" ")
}

console.log(titleCase('a clash of KINGS', 'a an the of')) //'A Clash of Kings'
console.log(titleCase('')) //'A Clash of Kings'
