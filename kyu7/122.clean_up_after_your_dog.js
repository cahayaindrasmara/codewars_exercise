function crap(x, bags, cap) {
    let count = ""

    for (let i = 0; i < x.length; i++) {
        // console.log(x[i]);
        for (let j = 0; j < x[i].length; j++) {
            // console.log(x[i][j]);
            if (x[i][j] === "@") {
                count++
            } else if (x[i][j] === "D") {
                return "Dog!!"
            }
        }
    }
    console.log("count:", count);

    if (count <= bags * cap) {
        return "Clean";
    } else {
        return "Cr@p";
    }
}

console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2)); //Clean
console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1)); //Crap
console.log(crap([['_', '_'], ['_', '@'], ['D', '_']], 2, 2)); //Dog!!