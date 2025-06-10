String.prototype.isUppercase = function () {
    return this.toString() === this.toUpperCase();
}

console.log("c".isUppercase()); //false
console.log("C".isUppercase()); //true
console.log("hello I AM DONALD".isUppercase()); //false
console.log("HELLO I AM DONALD".isUppercase());//true
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUppercase());//false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUppercase());//true

/*
gunakan this saat kamu membuat method di prototype (String.prototype)
gunakan parameter kalau kamu membuat fungsi biasa di luar prototype

Gaya Pemanggilan	    |  Cara Akses String-nya	|  Kode Fungsi
"HELLO".isUpperCase()	|  via this	                |  pakai this
isUpperCase("HELLO")	|  via parameter	        |  pakai str sebagai parameter
*/