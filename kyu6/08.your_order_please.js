function order(words) {
    let char = words.split(" ");
    // console.log(char)
    for (let i = 0; i < char.length; i++) {
        for (let j = 0; j < char.length - i - 1; j++) {
            let num = char[j].match(/\d/);
            let num1 = char[j + 1].match(/\d/);

            // console.log("#2:", num[0]);

            if (num > num1) {
                [char[j], char[j + 1]] = [char[j + 1], char[j]]
            }
        }
    }
    //   console.log(char)

    return char.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); //Thi1s is2 3a T4est
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //Fo1r the2 g3ood 4of th5e pe6ople
console.log(order("")); //""
