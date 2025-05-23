function dutyFree(normPrice, discount, hol) {
    let disc = normPrice * (discount / 100);
    let save = Math.floor(hol / disc);

    return save;
}

console.log(dutyFree(10, 10, 500)); //500
console.log(dutyFree(12, 50, 1000)); //166
console.log(dutyFree(24, 35, 3000)); //357
