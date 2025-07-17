function encode(string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        // console.log(string[i]);
        if (string[i] === "a") {
            result += "1";
        } else if (string[i] === "e") {
            result += "2";
        } else if (string[i] === "i") {
            result += "3";
        } else if (string[i] === "o") {
            result += "4";
        } else if (string[i] === "u") {
            result += "5"
        } else {
            result += string[i]
        }
    }

    return result;

    /*
    kiss
    const table = ['a', 'e', 'i', 'o', 'u']
    const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
    const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')
    */
}

function decode(string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "1") {
            result += "a";
        } else if (string[i] === "2") {
            result += "e";
        } else if (string[i] === "3") {
            result += "i";
        } else if (string[i] === "4") {
            result += "o";
        } else if (string[i] === "5") {
            result += "u"
        } else {
            result += string[i]
        }
    }
    return result;
}

console.log(encode("hello")); //h2ll4
console.log(decode("h2ll4")); //hello