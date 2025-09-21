function quadratic(x1, x2) {
    //   rumus = (x-x1) (x-x2)
    return [1, -(x1 + x2), x1 * x2]
}

console.log(quadratic(0, 1)); //[ 1, -1, 0 ]
console.log(quadratic(1, 1)); //[ 1, -2, 1 ]
console.log(quadratic(-4, -9)); //[ 1, 13, 36 ]
console.log(quadratic(5, 4)); //[ 1, -9, 20 ]