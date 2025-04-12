function getCount(str) {
    // let count = 0;

    // for (let i = 0; i < str.length; i++) {
    //     if ((str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o")) {
    //         count++
    //     }
    // }

    // return count;

    let count = 0;

    for (const char of str) {
        if (char.match(/[aiueo]/g)) {
            count++;
        }
    }
    return count;

    // return (str.match(/[aiueo]/g) || []).length
}

console.log(getCount("abracadabra"));