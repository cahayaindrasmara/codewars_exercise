function sumArray(array) {
    if (!array || array.length < 3) return 0;

    let arr = [...array];

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    arr.splice(arr.indexOf(max), 1);
    arr.splice(arr.indexOf(min), 1);

    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArray(null)); //0
console.log(sumArray([])); //0
console.log(sumArray([3])); //0
console.log(sumArray([3, 5])); //0
console.log(sumArray([6, 2, 1, 8, 10])); //16
console.log(sumArray([0, 1, 6, 10, 10])); //17
console.log(sumArray([-6, -20, -1, -10, -12])); //-28