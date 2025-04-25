function cockroachSpeed(s) {

    // ubah km menjadi cm
    // ubah jam menjadi detik
    // lalu s dikali cm dibagi detik

    return Math.floor(s * 100000 / 3600)
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));