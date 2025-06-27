function titleCase(title, minorWords) {
    if (!title) return "no string";

    let words = title.toLowerCase().split(" ");
    let minors = minorWords ? minorWords.toLowerCase().split(" ") : [];
    result = []

    console.log(words)
    console.log(minors)

    for (let i = 0; i < words.length; i++) {
        // console.log(words[i]);
        let word = words[i]

        if (i === 0 || !minors.includes(word)) {
            result.push(word[0].toUpperCase() + word.slice(1));
        } else {
            result.push(word)
        }
    }

    return result.join(" ")
}

console.log(titleCase('a clash of KINGS', 'a an the of')) //'A Clash of Kings'
console.log(titleCase('')) //no string
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); //The Wind in the Willows
console.log(titleCase('the quick brown fox')); //The Quick Brown Fox
