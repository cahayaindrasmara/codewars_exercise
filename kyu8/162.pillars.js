function pillars(numPill, dist, width) {
    if (numPill <= 1) return 0;

    let distanceBetween = (numPill - 1) * dist * 100;
    let middleWidths = (numPill - 2) * width

    return distanceBetween + middleWidths
}

console.log(pillars(1, 10, 10)); //0
console.log(pillars(2, 20, 25)); //200
console.log(pillars(11, 15, 30)); //15270