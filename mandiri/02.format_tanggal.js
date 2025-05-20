/*
Buat regex yang mencocokkan format tanggal dd-mm-yyyy atau d-m-yyyy dengan angka, dan menangkap hari, bulan, tahun sebagai grup terpisah.

Contoh cocok: "5-9-2023", "15-12-2021"

Contoh tidak cocok: "32-01-2023", "12/12/2023"
*/

function dateFormat(date) {
    console.log("input:", date)
    let regex = date.match(/(0[1-9]|1[0-9]|2[0-9]|3[0-1])-(0[1-9]|1[0-2])-(\d{4})/)
    console.log(regex)

    const day = regex[1];
    const month = regex[2];
    const year = regex[3]

    return `hari: ${day}, bulan: ${month}, tahun: ${year}`
}

console.log(dateFormat("05-09-2023"))
// console.log(dateFormat("32-09-2023"))
console.log(dateFormat("Hari ini adalah 15-12-2021 dan besok adalah 16-12-2021."))