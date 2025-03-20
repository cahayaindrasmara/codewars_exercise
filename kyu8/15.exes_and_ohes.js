function XO(str) {
    if (str.length === 0) {
        return true;
    }

    let resultX = 0;
    let resultO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x" || str[i] === "X") {
            resultX++
        } else if (str[i] === "o" || str[i] === "O") {
            resultO++
        }
    }

    if (resultX === resultO) {
        return true;
    } else {
        return false;
    }
}

// function XO(str) {
//     var z = str.toLowerCase();
//     var x = z.split("x").length;
//     var o = z.split("o").length;
//     return x == o;
// }

console.log(XO("xo"));
console.log(XO("XO"));
console.log(XO("xxxoo"));
console.log(XO("xxOo"));
console.log(XO(""));