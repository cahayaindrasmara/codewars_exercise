function remove(string) {
    if (string[string.length - 1] === "!") {
        return string.slice(0, -1)
    }
    return string

    //kiss
    //return s.replace(/!$/, '');
}

console.log(remove("Hi!")) //Hi
console.log(remove("Hi!!!")) //Hi!!
console.log(remove("!Hi")) //!Hi
console.log(remove("!Hi!")) //!Hi
