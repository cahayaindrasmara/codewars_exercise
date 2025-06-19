function filterString(value) {
    //version 1
    // let listNumber = [];

    // for (let i = 0; i < value.length; i++) {
    //     if (+value[i] >= 0) listNumber.push(value[i])
    // }

    // return +listNumber.join("")

    //version 2
    let string = value.split("").map(Number);
    console.log(string)

    let number = string.filter((number) => number >= 0);
    return +number.join("")

    //version 3
    //return +value.replace(/\D/g, '')
}

// console.log(filterString("123")); //123
// console.log(filterString("a1b2c3")); //123
console.log(filterString("a1b2c30")); //1230