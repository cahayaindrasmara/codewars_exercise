function logicalCalc(array, op) {
    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (op === "AND") {
            result = result && array[i];
        } else if (op === "OR") {
            result = result || array[i];
        } else if (op === "XOR") {
            result = result !== array[i]
        }
    }

    return result;

    //kiss
    if (op === "AND") return array.reduce((a, b) => a && b);
    if (op === "OR") return array.reduce((a, b) => a || b);
    if (op === "XOR") return array.reduce((a, b) => a !== b);
}

console.log(logicalCalc([true, true, true, false], "AND")); //false
console.log(logicalCalc([true, true, true, false], "OR")); //true
console.log(logicalCalc([true, true, true, false], "XOR")); //true
console.log(logicalCalc([true, true, false, false], "AND")); //false