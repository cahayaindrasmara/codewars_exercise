function add(a, b) {
    return a == b;
}

console.log(add('1', 1)); //true
console.log(add(1, '1')); //true
console.log(add(1, '0')); //false