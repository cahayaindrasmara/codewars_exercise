function Xbonacci(signature, n) {
    let result = signature.slice();
    // console.log(result);

    while (result.length < n) {
        let sum = result.slice(-signature.length).reduce((acc, cur) => acc + cur, 0);
        result.push(sum);
    }

    return result.slice(0, n)
}

console.log(Xbonacci([0, 1], 10));
/*
    [
        0, 1,  1,  2,  3,
        5, 8, 13, 21, 34
    ]
*/
console.log(Xbonacci([1, 1], 10));
/*
    [
        1,  1,  2,  3,  5,
        8, 13, 21, 34, 55
    ]    
*/
console.log(Xbonacci([0, 0, 0, 0, 1], 10));
/*
    [
        0, 0, 0, 0,  1,
        1, 2, 4, 8, 16
    ]
*/