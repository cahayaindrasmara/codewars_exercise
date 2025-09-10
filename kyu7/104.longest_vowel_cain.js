function solve(s) {
    let arrLongest = s.match(/[aiueo]+/g);
    console.log(arrLongest);

    return Math.max(...arrLongest.map(item => item.length));
}

console.log(solve("codewarriors")); //2
console.log(solve("suoidea")); //3
console.log(solve("ultrarevolutionariees")); //3
console.log(solve("strengthlessnesses")); //1