function digitize(n) {
    let convertStr = String(n);

    let result = [];

    for (let i = convertStr.length - 1; i >= 0; i--) {
        result.push(+convertStr[i]);
    }

    return result;
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]