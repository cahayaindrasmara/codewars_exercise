function mxdiflg(a1, a2) {
    if (!a1 || !a2 || a1.length === 0 || a2.length === 0) return -1

    let a1Length = a1.map(arr1 => arr1.length)
    // console.log(a1Length)
    let a2Length = a2.map(arr2 => arr2.length)
    // console.log(a2Length)

    let max1 = Math.max(...a1Length);
    let min1 = Math.min(...a1Length)

    let max2 = Math.max(...a2Length)
    let min2 = Math.min(...a2Length)

    console.log(`min1: ${min1}, max1: ${max1} dan min2: ${min2}, max2: ${max2}`);

    let selisih1 = Math.abs(max1 - min2);
    let selisih2 = Math.abs(max2 - min1);

    return selisih1 > selisih2 ? selisih1 : selisih2;
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2))