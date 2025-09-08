function countRedBeads(n) {
    if (n < 2) return 0;
    return (n - 1) * 2;
}

console.log(countRedBeads(0)); //0
console.log(countRedBeads(1)); //0
console.log(countRedBeads(2)); //2
console.log(countRedBeads(15)); //28