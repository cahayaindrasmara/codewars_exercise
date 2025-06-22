function sortGiftCode(code) {
    let codes = code.split("");

    for (let i = 0; i < codes.length; i++) {
        for (let j = 0; j < codes.length - i - 1; j++) {
            if (codes[j] > codes[j + 1]) {
                [codes[j], codes[j + 1]] = [codes[j + 1], codes[j]]
            }
        }
    }
    return codes.join("")

    //kiss
    //return code.split('').sort().join('');
}

console.log(sortGiftCode('abcdef')); //abcdef
console.log(sortGiftCode('pqksuvy')); //kpqsuvy
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')); //abcdefghijklmnopqrstuvwxyz
