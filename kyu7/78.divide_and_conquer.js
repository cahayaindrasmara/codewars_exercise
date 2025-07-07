function divCon(x) {
    let sumNum = 0;
    let sumStr = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "string") {
            let num = +x[i];
            sumStr += num;
        }

        if (typeof x[i] === "number") {
            sumNum += x[i];
        }
    }

    console.log("Number:", sumNum, "String:", sumStr)
    return sumNum - sumStr;
}

console.log(divCon([9, 3, '7', '3'])); //2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); //14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); //13