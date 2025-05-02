function getDivisorsCnt(n) {
    let count = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2;
        }
    }

    // for (let i = 1; i < Math.sqrt(n); i++) {
    //     if (n % i == 0) {
    //         counter += 2;
    //     }
    // }

    return count;
}

console.log(getDivisorsCnt(1)); //1
console.log(getDivisorsCnt(2)); //2
console.log(getDivisorsCnt(10)); //4
console.log(getDivisorsCnt(11)); //2
console.log(getDivisorsCnt(5000000000)); //110            