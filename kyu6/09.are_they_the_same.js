function comp(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }

    let freq1 = {}

    for (let i = 0; i < array1.length; i++) {
        let square = array1[i] ** 2;
        freq1[square] = (freq1[square] || 0) + 1;
    }
    console.log(freq1)

    let freq2 = {}

    for (let j = 0; j < array2.length; j++) {
        freq2[array2[j]] = (freq2[array2[j]] || 0) + 1
    }
    console.log(freq2)

    for (let key in freq1) {
        console.log(freq1[key])
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;

    // kiss
    // const comp = (a1, a2) => {
    //     if (!a1 || !a2 || a1.length !== a2.length) return false;
    //     return a1.map(x => x * x).sort().toString() === a2.sort().toString();
    // }
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]));  // true
// console.log(comp([], []));  // true
// console.log(comp([2, 3, 4], [4, 9, 16]));  // true
// console.log(comp([2, 2, 3], [4, 9, 9]));  // false