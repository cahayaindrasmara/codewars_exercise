function sumCubes(n) {
    // let result = 0;
    // for (let i = 1; i <= n; i++) {
    //     result += i ** 3;
    // }
    // return result;

    //rekursif way

    if (n == 1) {
        return 1
    } else {
        return n ** 3 + sumCubes(n - 1)
    }
}

console.log(sumCubes(1));
console.log(sumCubes(2));
console.log(sumCubes(3));
console.log(sumCubes(4));
console.log(sumCubes(10));
console.log(sumCubes(123));
