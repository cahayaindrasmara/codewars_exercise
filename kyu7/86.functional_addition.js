function add(n) {
    return function (o) {
        return n + o;
    }
}

console.log(add(1)(3)); //4
console.log(add(1)(-5)); //-4
console.log(add(27)(7)); //34

