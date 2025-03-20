const reverseSeq = n => {
    let result = [];

    for (let i = n; i > 0; i--) {
        result.push(i);
    }

    return result;
}

console.log(reverseSeq(5));
console.log(reverseSeq(7));
console.log(reverseSeq(10));