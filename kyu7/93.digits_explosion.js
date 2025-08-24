function explode(s) {
    // let result = "";

    // for (let i = 0; i < s.length; i++) {
    //     let number = Number(s[i]);

    //     for (let j = 0; j < number; j++) {
    //         result += number
    //     }
    // }

    // return result;

    //other way
    let result = "";

    for (let i = 0; i < s.length; i++) {
        result += s[i].repeat(s[i])
    }

    return result;

    //kiss
    //return s.split("").map((e) => e.repeat(+e)).join("");
}

console.log(explode("312")); //333122
console.log(explode("102269")); //12222666666999999999
console.log(explode("0")); //""
console.log(explode("0"));//""
console.log(explode("123")); //"122333"

