function padIt(str, n) {
    let result = str;
    let num = 1;

    do {
        num % 2 !== 0 ? result = "*" + result : result = result + "*";
        num++
        console.log(result)
    } while (num <= n);
    return result;
}

console.log(padIt("a", 3)); //**a*
console.log(padIt("a", 4)); //**a**
console.log(padIt("a", 5)); //***a**