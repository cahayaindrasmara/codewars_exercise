function arrayDiff(a, b) {
    let result = [];

    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        let found = false;
        for (let j = 0; j < b.length; j++) {
            console.log("#2:", b[j]);

            if (a[i] === b[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(a[i])
        }
    }

    return result;

    //kiss
    //return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1, 2], [1])); //[2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); //[1]
console.log(arrayDiff([1, 2, 2], [])); //[1,2,2]
console.log(arrayDiff([], [1, 2])); //[]
console.log(arrayDiff([1, 2, 3], [1, 2])); //[3]