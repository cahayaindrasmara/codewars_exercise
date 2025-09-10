function solve(s) {
    let arrLongest = s.match(/[aiueo]+/g);
    console.log(arrLongest);

    return Math.max(...arrLongest.map(item => item.length));
}

console.log(solve("codewarriors"));
console.log(solve("suoidea"));
console.log(solve("ultrarevolutionariees"));
console.log(solve("strengthlessnesses"));