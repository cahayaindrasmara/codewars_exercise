function revrot(str, sz) {
    if (sz <= 0 || str.length === 0 || str.length < sz) return ""

    let digits = str.split("").map(Number);
    console.log(digits)

    let chunks = [];
    for (let i = 0; i + sz <= digits.length; i += sz) {
        chunks.push(digits.slice(i, i + sz));
    }
    console.log(chunks)

    for (let i = 0; i < chunks.length; i++) {
        console.log(chunks[i])
        let sum = chunks[i].reduce((acc, value) => acc + value, 0);
        console.log("sum:", sum)

        if (sum % 2 === 0) {
            chunks[i].reverse();
        } else {
            let pindah = chunks[i].shift();
            chunks[i].push(pindah);
        }
    }

    return chunks.map((chunk) => chunk.join("")).join("")
}

console.log(revrot("1234", 0)) //""
console.log(revrot("1234", 5)) //""
console.log(revrot("733049910872815764", 5)) //330479108928157
console.log(revrot("833049910872815764", 5)) //403389108928157
