function sumPairs(ints, s) {
    // let minIndex = Infinity;
    // let result = null;

    // for (let i = 0; i < ints.length; i++) {
    //     console.log(ints[i]);

    //     for (let j = i; j < ints.length; j++) {
    //         console.log("inner loop:", ints[j]);

    //         if (ints[i] + ints[j] === s && i !== j) {
    //             if (j < minIndex) {
    //                 result = [ints[i], ints[j]]
    //             }
    //         }
    //     }
    // }
    // return result;

    const seen = new Set();

    for (let i = 0; i < ints.length; i++) {
        let needed = s - ints[i];
        if (seen.has(needed)) {
            return [needed, ints[i]];
        }
        seen.add(ints[i])
    }

    return undefined
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); //[1,7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); //[0,-6]
console.log(sumPairs([20, -13, 40], -7)); //undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); //[1,1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); //[3,7]
console.log(sumPairs([4, -2, 3, 3, 4], 8)); //[4,4]
console.log(sumPairs([0, 2, 0], 0)); //[0,0]
console.log(sumPairs([5, 9, 13, -3], 10)); //[13, -3]