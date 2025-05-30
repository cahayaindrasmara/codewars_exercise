function removeChar(str) {
    // let char = str.split("");
    // char.shift();
    // char.pop();
    // return char.join("");

    //kiss
    //return str.substring(1, str.length - 1)
    return str.slice(1, -1);
}

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ab"));
console.log(removeChar("ooopsss"));

