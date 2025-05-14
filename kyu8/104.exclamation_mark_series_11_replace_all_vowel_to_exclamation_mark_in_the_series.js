function replace(s) {
    let result = ""
    const vowel = ["a", "i", "u", "e", "o"];

    for (let i = 0; i < s.length; i++) {
        //     console.log(s[i])
        let lowerCase = s[i].toLowerCase()
        let found = false;
        for (let j = 0; j < vowel.length; j++) {
            //       console.log(vowel[j])
            if (lowerCase === vowel[j]) {
                found = true
            }
        }

        if (!found) {
            result += s[i]
        } else {
            result += "!"
        }
    }
    //   console.log(result)
    return result;

    //kiss
    // const replace = s => s.replace(/[aeiou]/gi, '!'); //menggunakan regex
}

console.log(replace("Hi!")); //H!!
console.log(replace("!Hi! Hi!")); //!H!! H!!
console.log(replace("aeiou")); //!!!!!
console.log(replace("ABCDE")); //!BCD!