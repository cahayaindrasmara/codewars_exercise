function cubeChecker(volume, side) {
    if (volume <= 0 || side <= 0) return false;

    return side ** 3 === volume ? true : false;

    // kiss
    //return Math.pow(side, 3) === volume && side > 0;

};

console.log(cubeChecker(8, 3)); //false
console.log(cubeChecker(8, 2)); //true
console.log(cubeChecker(-8, -2)); //false
console.log(cubeChecker(0, 0)); //false
console.log(cubeChecker(1, 5)); //false
console.log(cubeChecker(125, 5)); //true