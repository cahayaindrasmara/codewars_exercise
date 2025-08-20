function distinct(a) {
    let numberDistinct = new Set(a);
    return Array.from(numberDistinct);
}

console.log(distinct([1])); //[1]
console.log(distinct([1, 2])); //[1,2]
console.log(distinct([1, 1, 2]));//[1,2]
