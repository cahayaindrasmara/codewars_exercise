function isSortedAndHow(array) {
    let ascending = true;
    let descending = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            descending = false;
        } else if (array[i] > array[i + 1]) {
            ascending = false
        }
    }

    if (ascending) {
        return "yes, ascending"
    } else if (descending) {
        return "yes, descending"
    } else {
        return "no"
    }
}

console.log(isSortedAndHow([1, 3, 9, 4]));
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([4, 3, 2, 1]));