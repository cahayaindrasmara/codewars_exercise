function addLength(str) {
    let string = str.split(" ")
    let arrLength = [];

    for (let i = 0; i < string.length; i++) {
        arrLength.push(`${string[i]} ${string[i].length}`)
    }

    return arrLength;

    // kiss
    // return str.split(" ").map(s => `${s} ${s.length}`)
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));