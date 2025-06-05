function incrementString(strng) {
    const match = strng.match(/(\d+)$/);
    /*
    mencocokan angka di akhir string menggunakan regex
    \d+ artinya mencocoka satu atau lebih digit
    () adalah grup tangkapan -> hasil disimpan di match[1]
    $ artinya di akhir string
    
    contoh: 
    "foobar009" → match = ["009", "009"]
    "foo" → match = null
    */
    console.log(match)

    if (match) { //memeriksa apakah match ditemukan (tidak = null)
        const number = match[1];
        /*
        mengambil angka hasil grup tangkapan
        match[1] adalah angka sebagai string (misalnya "009")
        */
        const length = number.length;
        /*
        menyimpan panjang digit asli
        berguna untuk menjaga jumlah digit saat menambahkan leading zero lagi nanti
        */
        const incremented = String(+number + 1).padStart(length, "0");
        /*
        +number: mengubah string "009" menjadi number "9"
        +1: menambahkan 1 -> jadi 10
        String(...): ubah hasilnya menjadi string "10"
        .padStart(length, "0"): tambah nol didepan jika diperlukan agar total panjang = length asli
          kalau length = 3, maka:
            "10".padStart(3,"0") -> "010"
        */
        return strng.slice(0, -length) + incremented;
        /*
        ambil bagian awal sampai string sebelum angka di akhir
          misalnya "foobar009" -> "foobar"
        lalu digabungkan dengan incremented (angka baru)
          "foobar" + "010" -> "foobar010"
        */
    } else {
        return strng + "1";
        /*
        kalau tidak ada angka di akhir (match === null), langsung tambahkan 1 ke ujung
        "foo" -> "foo1"
        */
    }

}

console.log(incrementString("foobar000")); //foobar001
console.log(incrementString("foobar999")); //foobar1000
console.log(incrementString("foo")); //foo1
console.log(incrementString("foobar001")); //foobar002
console.log(incrementString("foobar1")); //foobar2
console.log(incrementString("1")); //2
console.log(incrementString("009")); //010
console.log(incrementString("fo98obar99")); //fo98obar100