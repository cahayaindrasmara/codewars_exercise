function gps(s, x) {
    if (x.length <= 1) return 0;

    let record = []
    for (let i = 0; i < x.length - 1; i++) {
        let averageSpeed = (3600 * (x[i + 1] - x[i]) / s);
        record.push(averageSpeed);
    }
    console.log(record)
    return (Math.floor(Math.max(...record)));
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])) //74
console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])) //41
console.log(gps(20, [0.20])) //0
