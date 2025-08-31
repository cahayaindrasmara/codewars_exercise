function strCount(str, letter) {
    return str === "" ? 0 : str.split("").filter(char => char === letter).length;
}

console.log(strCount('Hello', 'o')); //1
console.log(strCount('Hello', 'l')); //2
console.log(strCount('', 'z')); //0