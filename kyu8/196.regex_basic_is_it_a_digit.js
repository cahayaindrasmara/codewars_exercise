String.prototype.digit = function () {
    return /^\d$/.test(this)
}

console.log("14".digit()); //false
console.log("a5".digit()); //false
console.log("7".digit());//true

/*
/\d/ -> ada minimal satu digit dimana saja didalam string

/^\d$/ -> string terdiri dari hanya satu karakter,dan karakter itu adalah digit

jika ingin dua karakter digit -> /^\d\d$/
atau bisa disingkat -> /^\d{2}$/

kalau kamu ingin memeriksa digit dengan panjang berbeda (misalnya 1 - 3)
regexnya bisa diubah jadi -> /^d{1,3}$/
*/