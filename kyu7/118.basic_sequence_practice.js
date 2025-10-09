function sumOfN(n) {
    // let start = 0;
    // let list = [];

    // if (n === 0) return [0];

    // for (let i = 0; i <= n; i++) {
    //     start += i;
    //     list.push(start);
    // }

    // for (let i = 0; i >= n; i--) {
    //     start += i;
    //     list.push(start);
    // }

    // return list;

    let list = [0];
    for (let i = 1; i <= Math.abs(n); i++) {
        if (n > 0) {
            list[i] = list[i - 1] + i;
        } else {
            list[i] = list[i - 1] - i;
        }
    }

    return list;
}

console.log(sumOfN(3)); //[ 0, 1, 3, 6 ]
console.log(sumOfN(-4)); //[ 0, -1, -3, -6, -10 ]
console.log(sumOfN(1)); //[ 0, 1 ]
console.log(sumOfN(0)); //[0]