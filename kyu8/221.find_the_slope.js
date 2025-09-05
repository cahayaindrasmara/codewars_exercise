function slope(points) {
    const [a, b, c, d] = points;
    let theFirstPoint = d - b;
    let theSecondPoint = c - a;
    let gradient = theFirstPoint / theSecondPoint;

    return isFinite(gradient) ? gradient.toString() : "undefined";
}

console.log(slope([19, 3, 20, 3])); //"0"
console.log(slope([2, 7, 4, -7])); //"-7"
console.log(slope([10, 50, 30, 150])); //"5"
console.log(slope([15, 45, 12, 60])); //"-5"
console.log(slope([10, 20, 20, 80])); //"6"
console.log(slope([-10, 6, -10, 3])); //"undefined"