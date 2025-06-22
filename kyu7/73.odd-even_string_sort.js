function sortMyString(S) {
    let odd = "";
    let even = "";
    for (let i = 0; i < S.length; i++) {
        // console.log(S[i])
        if (i % 2 === 1) {
            odd += S[i]
        } else {
            even += S[i]
        }
    }

    return `${even} ${odd}`
}

console.log(sortMyString("CodeWars")); //CdWr oeas
console.log(sortMyString("YCOLUE'VREER")); //YOU'RE CLEVER