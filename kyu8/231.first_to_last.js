function firstToLast(str, c) {
    let first = str.indexOf(c) || 0;
    let second = str.lastIndexOf(c) || 0;

    return first === -1 || second === -1 ? -1 : second - first;
}

console.log(firstToLast("ababc", "a")); //2
console.log(firstToLast("ababc", "d")); //-1