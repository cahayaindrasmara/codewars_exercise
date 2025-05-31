function nearestSq(n) {
    let sqrt = Math.sqrt(n);
    let nearest = Math.round(sqrt);
    return nearest * nearest;
}

console.log(nearestSq(111))