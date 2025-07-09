function parseF(s) {
    const float = parseFloat(s);
    return isNaN(float) ? null : float;
}

console.log(parseF("cahaya")); //null
console.log(parseF("1")); //1
console.log(parseF("one")); //null