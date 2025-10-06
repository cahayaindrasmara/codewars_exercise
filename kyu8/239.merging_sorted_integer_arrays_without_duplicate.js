function mergeArrays(a, b) {
    // console.log(a, b)
    let join = (a.concat(b)).sort((a, b) => a - b);
    //   console.log(join.sort());
    let result = new Set(join);
    //   for (let i = 0; i < join.length; i++) {
    //     result.add(join[i])
    //   }
    return [...result];

    //kiss
    //return [...new Set(a.concat(b))].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); //[ 1, 2, 3, 4, 5, 6 ]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])); //[ 2, 4, 6, 8 ]
