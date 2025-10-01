function closeCompare(a, b, margin = 0) {
    //   console.log(a,b,margin)
    // console.log(margin, b - a)
    if (margin >= Math.abs(b - a)) {
        return 0;
    } else if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    }
}

console.log(closeCompare(4, 5)); //-1
console.log(closeCompare(5, 5)); //0
console.log(closeCompare(6, 5)); //1
console.log(closeCompare(-6, -5)); -1
console.log(closeCompare(2, 5, 3)); //0