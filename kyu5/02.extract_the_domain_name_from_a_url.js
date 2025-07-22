function domainName(url) {
    let regex = url.match(/(?:https?:\/\/)?(?:www\.)?([^\.]+)/);
    /*
    ()     -> ini simbol capturing, dia menangkap semua string yang match dengan string yang diuji didalam array match
    (?:)   -> ini simbol non capturing, dia mencocokan semua string yang dengan string yang diuji tapi tidak ditangkap didalam array
    https? -> simbol tanda tanya ini karakter terdahulu menjadi opsional (s). mencocokan 0 atau 1
    ?:     -> ini simbol non capturing
    \      -> ini merupakan escape character digunakan untuk melarikan karakter khusus agar bisa dibaca sebagai karakter biasa

    ?      -> mencocokan 0 atau 1, karakter terdahulu menjadi opsional  

    ()    -> ini menggunakan capturing dan akan ditangkap
    [^]   -> ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini regex akan mencocokan apapun yang bukan karakter.

    +     -> mencocokan 1 atau lebih dari karakter terdahulu

    */
    console.log(regex)
    return regex ? regex[1] : null;
}

console.log(domainName("http://google.com")); //google
console.log(domainName("www.xakep.ru")); //xakep
