function DNAtoRNA(dna) {
    let rna = "";

    for (let molecul in dna) {
        //     console.log(dna[i])
        rna += dna[molecul] === "T" ? "U" : dna[molecul]
    }
    //   console.log(rna);
    return rna;

    //return dna.replace(/T/g, 'U'); //bisa menggunakan regex
}

console.log(DNAtoRNA("TTTT")); //"UUUU"
console.log(DNAtoRNA("GCAT")); //"GCAU"
console.log(DNAtoRNA("GACCGCCGCC")); //"GACCGCCGCC"