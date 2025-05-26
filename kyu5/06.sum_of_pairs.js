function sumPairs(ints, s) {
    // let earliestPair = null;
    // let earliestIndex = ints.length;

    // for (let i = 0; i < ints.length; i++) {
    //     for (let j = 0; j < ints.length; j++) {
    //         if (ints[i] + ints[j] === s) {
    //             if (j < earliestIndex) {
    //                 earliestIndex = j;
    //                 earliestPair = [ints[i], ints[j]];
    //             }
    //         }
    //     }
    // }
    // return earliestPair ?? undefined;

    const seen = new Set();

    for (let i = 0; i < ints.length; i++) {
        let needed = s - ints[i];
        if (seen.has(needed)) {
            return [needed, ints[i]];
        }
        seen.add(ints[i])
    }
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); //[1,7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); //[0,-6]
console.log(sumPairs([20, -13, 40], -7)); //undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); //[1,1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); //[3,7]
console.log(sumPairs([4, -2, 3, 3, 4], 8)); //[4,4]
console.log(sumPairs([0, 2, 0], 0)); //[0,0]
console.log(sumPairs([5, 9, 13, -3], 10)); //[13, -3]