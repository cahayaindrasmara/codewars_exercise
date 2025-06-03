function squareArea(A) {
    // diketahui panjang busur A dari seperempat persegi
    // cari jari-jari atau sisi persegi? Panjang Busur = (Sudut Pusat/360°) * 2 * π * r
    // cari luas persegi? r * r

    let r = A / (0.25 * 2 * Math.PI)
    // console.log(r)
    return +(r * r).toFixed(2);

    /*
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area*100)/100
    */
}

console.log(squareArea(2)) //1.62, 1e-2
console.log(squareArea(0)) //0, 1e-2
console.log(squareArea(14.5)) //80, 1e2

