Array.prototype.remove = function (integer_list, values_list) {
    //kiss
    // return integer_list.filter(val => !values_list.includes(val));

    let result = []
    for (let i = 0; i < integer_list.length; i++) {
        console.log(integer_list[i]);
        if (!values_list.includes(integer_list[i])) {
            console.log(integer_list[i], true)
            result.push(integer_list[i])
        }
    }
    return result;
}

console.log([].remove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))