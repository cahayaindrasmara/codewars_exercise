function presses(phrase) {
    const keypad = {
        "1": ["1"],
        "2": ['a', 'b', 'c', '2'],
        "3": ['d', 'e', 'f', '3'],
        "4": ['g', 'h', 'i', '4'],
        "5": ['j', 'k', 'l', '5'],
        "6": ['m', 'n', 'o', '6'],
        "7": ['p', 'q', 'r', 's', '7'],
        "8": ['t', 'u', 'v', '8'],
        "9": ['w', 'x', 'y', 'z', '9'],
        "0": [' ', '0'],
        "*": ['*'],
        "#": ['#']
    }

    let count = 0;

    for (let char of phrase.toLowerCase()) {
        console.log(char);

        for (let key in keypad) {
            console.log(keypad[key])
            let idx = keypad[key].indexOf(char);
            console.log(idx)

            if (idx !== -1) {
                count += idx + 1
                break;
            }
        }
    }
    return count;
}

console.log(presses('LOL'))