function descendingOrder(n) {
    let char = n.toString().split("");
    // console.log(char);

    for (let i = 0; i < char.length; i++) {
        console.log(char[i]);
        for (let j = 0; j < char.length - i - 1; j++) {
            if (char[j] < char[j + 1]) {
                let temp = char[j];
                char[j] = char[j + 1];
                char[j + 1] = temp
            }
        }
    }
    return Number(char.join(""));

    //  return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
