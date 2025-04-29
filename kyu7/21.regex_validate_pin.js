function validatePIN(pin) {
    /*
      ^ -> mulai dari awal string
      \d{4} -> empat digit angka
      | -> atau
      \d{6} ->enam digit angka
      $ -> harus sampai akhir string
    */

    return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("123"));
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("00000000"));