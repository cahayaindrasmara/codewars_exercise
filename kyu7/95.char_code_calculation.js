function calc(x) {
    let total1 = "";

    for (let i = 0; i < x.length; i++) {
        total1 += x[i].charCodeAt(0);
    }

    let count7 = (total1.match(/7/g) || []).length;
    return count7 * 6;
}

console.log(calc("ABC"));
console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
