function uniqueInOrder(iterable) {
    let listUnique = [];

    for (let i = 0; i < iterable.length; i++) {
        let found = false;

        if (iterable[i] === iterable[i + 1]) {
            found = true;
        }

        if (!found) {
            listUnique.push(iterable[i])
        }
    }

    return listUnique;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A','B','C','D','A','B']