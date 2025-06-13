function solution(string) {
    // let word = "";

    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] === string[i].toUpperCase()) {
    //         word += " " + string[i];
    //     } else {
    //         word += string[i];
    //     }
    // }

    // return word;

    //kiss
    console.log(string.match(/([A-Z])/g))
    return string.replace(/([A-Z])/g, " $1")
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));