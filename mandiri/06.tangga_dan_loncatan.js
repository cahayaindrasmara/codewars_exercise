/*
Seorang anak sedang menaiki tangga dengan tinggi tertentu. Setiap loncatan awal, dia bisa melompat setinggi jump meter. Namun, setelah setiap loncatan, tenaganya berkurang dan tinggi loncatan berikutnya berkurang sebesar loss meter. Anak tersebut akan terus melompat sampai dia tidak bisa melompat lebih tinggi dari 0 atau sudah mencapai atau melewati tinggi tangga.

Buat fungsi yang menghitung berapa kali anak tersebut melompat sampai dia mencapai atau melewati tangga, atau menyerah
*/

function countJumps(targetHeight, initialJump, loss) {
    if (initialJump <= 0 || loss <= 0 || targetHeight <= 0) {
        return -1
    }

    let currentJump = initialJump;
    let totalHeight = 0
    let count = 0
    while (currentJump > 0 && totalHeight < targetHeight) {
        totalHeight += currentJump;
        // console.log(totalHeight)
        count++
        currentJump -= loss
        // console.log("total:", currentJump)
    }
    return totalHeight >= targetHeight ? count : -1;
}

console.log(countJumps(10, 5, 1));
console.log(countJumps(8, 3, 0.5));
