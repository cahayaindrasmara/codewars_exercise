function sumOfIntegersInString(s) {
    let number = (s.match(/\d+/g) || []).map(Number).reduce((acc, cur) => acc + cur, 0);
    return number;


    // validasi jika ada hasil yang bukan array atau empty sehingga menyebabkan null
    // 1. pakai opsional channing + fallback array
    // let numbers = (s.match(/\d+/g) || []).map(Number);

    // 2. pakai optional channing (ES2020+)
    // let numbers = s.match(/\d+/g)?.map(Number) || [];
}

console.log(sumOfIntegersInString("12.4"));
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));