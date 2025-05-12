var capitals = function (word) {
    let index = [];

    for (let i = 0; i < word.length; i++) {
        // kiss
        // word[i].toUpperCase() === word[i]
        for (let j = 65; j <= 90; j++) {
            let char = String.fromCharCode(j);
            if (word[i] === char) {
                index.push(i)
            }
        }
    }

    return index;
}

console.log(capitals("CodEWaRs")); //[0,3,4,6]
console.log(capitals('aAbB')); //[1,3]
console.log(capitals("AAA")); //[0,1,2]
console.log(capitals("")); //[]
