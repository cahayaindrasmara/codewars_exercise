function getRealFloor(n) {
    if (n >= 13) return n - 2

    if (n > 0) return n - 1

    return n
}

console.log(getRealFloor(1)); //0
console.log(getRealFloor(14)); //12
console.log(getRealFloor(5)); //4
console.log(getRealFloor(15)); //13
console.log(getRealFloor(-2)); //-2