function spEng(sentence) {
    let regex = /english/i.test(sentence);
    return regex;
}

console.log(spEng("english")); //true
console.log(spEng("egnlish")); //false
console.log(spEng("abcEnglishdef")); //true
console.log(spEng("abcenglishdef")); //true
console.log(spEng("abcnEglishsef")); //false

/*
regex flag i (ignore case), fungsi ini membuat pencocokan tidak peduli huruf besar/kecil
contoh: /english/i cocok dengan istilah english, English, ENGLISH
wajib dipakai jika ingin mencocokan kata tanpa peduli kapitalisasi

simbol ?, + dll dalam regex, tidak bisa berdiri sendiri (/+english/) -> salah
harus ada karakter atau grup di depannya, contoh /[a-z]?english/
*/
