function grow(x) {
    // let result = 1;

    // for (let i = 0; i < x.length; i++) {
    //     result *= x[i];
    //     // console.log(x[i])
    // }

    // return result;

    return x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(grow([1, 2, 3])); //6
console.log(grow([4, 1, 1, 1, 4])); //16
console.log(grow([1, 2, 3])); //6
console.log(grow([2, 2, 2, 2, 2, 2])); //64
