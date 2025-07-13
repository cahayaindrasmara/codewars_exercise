function wave(str) {
    let result = "";
    let wave = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        console.log(str);

        result = ""
        for (let j = 0; j < str.length; j++) {
            console.log("#2:", str[j]);

            if (i === j) {
                result += str[j].toUpperCase();
            } else {
                result += str[j]
            }
        }

        wave.push(result)
    }

    return wave;
}

// console.log(wave("hello"));
console.log(wave("two words"));