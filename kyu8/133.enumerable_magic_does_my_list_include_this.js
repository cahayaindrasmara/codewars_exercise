function include(arr, item) {
    // let found = false;

    // for (value of arr) {
    //     // console.log(value)
    //     if (value === item) {
    //         found = true;
    //     }
    // }

    // return found;

    //kiss
    return arr.includes(item)
}

console.log(include([1, 2, 3, 4, 5], 3)); //true
console.log(include([1, 2, 4, 5], 3)); //false
console.log(include([], 3)); //false
