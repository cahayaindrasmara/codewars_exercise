function isPP(n) {
    for (let m = 2; m * m <= n; m++) {
        // console.log(m);

        for (let k = 2; Math.pow(m, k) <= n; k++) {
            // console.log("#2:", k);

            if (Math.pow(m, k) === n) return [m, k]
        }
    }
    return null;
}

console.log(isPP(4)); //[2,2]
console.log(isPP(9)); //[3,2]
console.log(isPP(5)); //null
console.log(isPP(8)); //[2,3]
console.log(isPP(11)); //null
console.log(isPP(27)); //[3,3]
