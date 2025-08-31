function twoHighest(arr) {
    // if (arr.length === 0) return [];
    // let sequence = arr.sort((a, b) => b - a);
    // let setHigh = new Set(sequence);
    // let arrHigh = Array.from(setHigh);

    // return arrHigh.length > 1 ? [arrHigh[0], arrHigh[1]] : arrHigh

    //kiss
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

console.log(twoHighest([])); // []
console.log(twoHighest([15])); //15
console.log(twoHighest([15, 20, 20, 17])); //[20,17]
