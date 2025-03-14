function repeatStr(n, s) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += s;
    }

    return result;
}

// keep it simple stupid -> use repeat methods

console.log(repeatStr(3, "Hello"));