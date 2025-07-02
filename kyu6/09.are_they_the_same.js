function comp(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }

    let sortedArr1 = array1.map(x => x * x).sort((a, b) => a - b);
    console.log(sortedArr1);
    let sortedArr2 = array2.sort((a, b) => a - b);
    console.log(sortedArr2);

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false;
    }

    return true;

    // kiss
    // const comp = (a1, a2) => {
    //     if (!a1 || !a2 || a1.length !== a2.length) return false;
    //     return a1.map(x => x * x).sort().toString() === a2.sort().toString();
    // }
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]));  // true
console.log(comp([], []));  // true
console.log(comp([2, 3, 4], [4, 9, 16]));  // true
console.log(comp([2, 2, 3], [4, 9, 9]));  // false