function abbreviate(string) {
    return string.split(/([^a-zA-Z]+)/).map(word => {
        if (/^[a-zA-Z]{4,}$/.test(word)) {
            return `${word[0]}${word.length - 2}${word[word.length - 1]}`
        }
        return word
    }).join("")
}

/*
capturing adalah bagian dari regex yang dilingkupi tanda kurung (...) yang digunakan untuk:
1. menangkap bagian teks yang cocok dengan pola didalam kurung
2. menyimpan hasilnya agar bisa digunakan kembali, baik dalam
    - hasil match
    - penggantian di replace()
    - atau saat split()

Kegunaan	                       Contoh
Menyimpan bagian dari teks	    .match(/(\d+)/)
Ganti teks berdasarkan bagian	.replace(/(\d+)/, "[$1]")
Simpan pemisah saat .split()	.split(/([^a-zA-Z]+)/)
*/


console.log(abbreviate("internationalization")); //i18n
console.log(abbreviate(":;=;:")); //:;=;:
console.log(abbreviate("elephant-rides are really fun!")); //e6t-r3s are r4y fun!