function splitAndMerge(string, separator) {
    let words = string.split(" ")
    let result = []
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i])
        let chars = words[i].split("");
        // console.log(chars.join(`${separator}`))
        let symbol = chars.join(`${separator}`)
        result.push(symbol);
    }
    // console.log(result.join(" "))
    return result.join(" ");

    //kiss
    //return str.split(" ").map(word => word.split("").join(separator)).join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));

