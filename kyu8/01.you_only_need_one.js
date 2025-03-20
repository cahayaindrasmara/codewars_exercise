function check(a, x) {
    let result = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            result = true;
        }
    }

    return result;
}

console.log(check(["aku", "kau", "kua"], "iau"));