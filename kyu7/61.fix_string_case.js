function solve(s) {
    let lowerLeng = 0, upperLeng = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            lowerLeng++
        } else {
            upperLeng++
        }
    }

    if (lowerLeng > upperLeng) {
        return s.toLowerCase();
    } else if (upperLeng > lowerLeng) {
        return s.toUpperCase();
    } else if (upperLeng === lowerLeng) {
        return s.toLowerCase();
    }
}

console.log(solve("coDe")); //code
console.log(solve("code")); //code
console.log(solve("CODe")); //CODE
console.log(solve("COde")); //code
console.log(solve("Code")); //code