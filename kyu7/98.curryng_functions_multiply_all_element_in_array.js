function multyplyAll(arr) {
    return function (n) {
        return arr.map(x => x * n);
    }
}

console.log(multyplyAll([1, 2, 3])(2)); //[2,4,6]
console.log(multyplyAll([1, 2, 3])(5)); //[5,10,15]
