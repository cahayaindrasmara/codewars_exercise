function encode(str, n) {
    let result = [];
    let key = n.toString().split("");

    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt(0) - 96;
        console.log(code);

        result.push(+code + +key[i % key.length])
    }

    return result;

    //kiss
    //return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))

    /*
        let arr = [...str].map((c, i) => 
        c.charCodeAt(0) - 96 + Number(key[i % key.length])
        );
    */
}

console.log(encode("scout", 1939)); //[ 20, 12, 18, 30, 21 ]
console.log(encode("masterpiece", 1939));
/*
    [
    14, 10, 22, 29,  6,
    27, 19, 18,  6, 12,
    8
    ]
*/
