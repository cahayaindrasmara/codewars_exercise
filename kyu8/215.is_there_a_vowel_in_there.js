function isVow(a) {
    let vowel = ["a", "i", "u", "e", "o"];

    for (let i = 0; i < a.length; i++) {
        let char = String.fromCharCode(a[i]);
        console.log(char);

        if (vowel.includes(char)) {
            a[i] = char;
        }
    }

    return a;
}

console.log(isVow([100, 100, 116, 105, 117, 121])); //[ 100, 100, 116, 'i', 'u', 121 ]
console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]));
// [
//   118, 'u', 120, 121, 'u',
//   98,  122, 'a', 120, 106,
//   104, 116, 113, 114, 113,
//   120, 106
// ]