function filter_list(l) {
    let list = [];

    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            list.push(l[i])
        }
    }

    return list
}

console.log(filter_list([1, 2, 'a', 'b']))
console.log(filter_list([1, 'a', 'b', 0, 15]))
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))