function dnaStrand(dna) {
    let result = "";

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result += "T";
        } else if (dna[i] === "T") {
            result += "A";
        } else if (dna[i] === "G") {
            result += "C";
        } else if (dna[i] === "C") {
            result += "G";
        }
    }

    return result;
}

console.log(dnaStrand("AAAA")); //TTTT
console.log(dnaStrand("ATTGC")); //TAACG
console.log(dnaStrand("GTAT")); //CATA