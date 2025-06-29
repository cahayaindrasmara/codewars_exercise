function getASCII(c) {
    let codeChar = c.charCodeAt(0);
    return codeChar;
}

console.log(getASCII("A")); //65
console.log(getASCII(" ")); //32
console.log(getASCII("!")); //33