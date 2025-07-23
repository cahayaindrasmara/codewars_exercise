function kebabize(str) {
    let result = "";
    let string = str.match(/[a-zA-Z]/g).join("");
    console.log(string);

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            result += i !== 0 ? `-${string[i].toLowerCase()}` : string[i].toLowerCase();
        } else {
            result += string[i]
        }
    }

    return result;

    //another way
    /*
    return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
    */
}

console.log(kebabize("MyCamelCasedString")); //my-camel-cased-string
console.log(kebabize("MyCamelHas3Humps")); //my-camel-has-humps