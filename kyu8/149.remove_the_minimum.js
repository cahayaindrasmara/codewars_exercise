function removeSmallest(numbers) {
    let min = Math.min(...numbers);

    let result = [...numbers]

    for (let i = 0; i < result.length; i++) {
        if (min === result[i]) {
            result.splice(i, 1);
            break;
        }
    }

    return result;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([41, 388, 379, 53, 153])); //[ 388, 379, 53, 153 ]
console.log(removeSmallest([
    109, 23, 260, 369, 182,
    306, 381, 235, 150, 269,
    394, 101, 270, 203, 229
]
));
/*
[
  109, 260, 369, 182,
  306, 381, 235, 150,
  269, 394, 101, 270,
  203, 229
]
*/