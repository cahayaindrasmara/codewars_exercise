function maxDiff(list) {
    let max = Math.max(...list)
    let min = Math.min(...list)
    console.log(max, min)

    return list.length <= 1 ? 0 : max - min;
};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); //6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); //11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); //16
console.log(maxDiff([16])); //0
console.log(maxDiff([])); //0