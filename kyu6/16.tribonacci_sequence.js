function tribonacci(signature, n) {
    // let num1 = signature[0];
    // let num2 = signature[1];
    // let num3 = signature[2];
    // let sum = 0;
    // let result = [num1, num2, num3];

    // if (n === 0) {
    //     return []
    // }

    // if (n === 1) {
    //     return [num1]
    // }

    // if (n === 2) {
    //     return [num1, num2]
    // }

    // for (let i = 3; i < n; i++) {
    //     sum = num1 + num2 + num3;
    //     num1 = num2;
    //     num2 = num3;
    //     num3 = sum;
    //     result.push(num3)
    // }

    // return result;

    for (let i = 3; i < n; i++) {
        signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
    }

    return signature.slice(0, n)
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([1, 2, 3], 10));
console.log(tribonacci([3, 2, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([1, 1, 1], 0));


