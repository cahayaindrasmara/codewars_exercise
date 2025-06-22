function bump(x) {
    let bumps = x.split("");
    //   console.log(bumps);
    let count = 0;

    for (let i = 0; i < bumps.length; i++) {
        if (bumps[i] === "n") {
            count++
        }
    }

    return count > 15 ? "Car Dead" : "Woohoo!";
}

console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); //"Car Dead"
console.log(bump("n")); //"Woohoo!"
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")); //"Woohoo!"
console.log(bump("______n___n_")); //"Woohoo!"