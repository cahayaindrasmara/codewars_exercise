function angle(n) {
    //rumus menghitung jumlah sudut dalam poligon, dimana n adalah jumlah sisi poligon
    return (n - 2) * 180;
}

console.log(angle(3)); //180
console.log(angle(4)); //360