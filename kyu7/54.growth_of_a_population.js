function nbYear(p0, percent, aug, p) {
    let countYear = 0;
    let currentYear = 0;

    while (p0 < p) {
        currentYear = p0 + (p0 * percent / 100) + aug;
        p0 = Math.floor(currentYear);
        countYear++
        console.log(`tahun ke-${countYear} populasi: ${p0}`)
    }

    // console.log(countYear)
    return countYear;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500000, 2.5, 10000, 2000000));