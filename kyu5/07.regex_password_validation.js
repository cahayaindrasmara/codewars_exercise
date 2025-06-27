function validPass(string) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(string);

    /*
    (?=...) adalah positive lookahead
    Di posisi saat ini, kita mengecek apakah karakter setelahnya sesuai dengan syarat tertentu.

    ^.{6,}$
    string yang memiliki minimal 6 karakter apa pun dari awal sampai akhir.

    (?=.*[a-z])
    digunakan untuk mengecek apakah di dalam string terdapat minimal satu huruf kecil (a sampai z), di posisi mana pun dalam string.
    */
}

console.log(validPass("fjd3IR9"))
console.log(validPass("ghdfj32"))
console.log(validPass("fDSJKHD23"))
console.log(validPass("dsF43"))
console.log(validPass("djI3_8D55"))
console.log(validPass("djI38D55@@"))
console.log(validPass("djI38D55@@"))



