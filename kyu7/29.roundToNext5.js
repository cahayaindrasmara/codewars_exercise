function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(0)); //0
console.log(roundToNext5(1)); //5
console.log(roundToNext5(7)); //10
console.log(roundToNext5(13)); //15
console.log(roundToNext5(20)); //20
