const arrowFunc = function (arr) {
    return arr.map(value => String.fromCharCode(value)).join("")
}

console.log(arrowFunc([84, 101, 115, 116])); //Test
console.log(arrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])); //FUS ROH DAH