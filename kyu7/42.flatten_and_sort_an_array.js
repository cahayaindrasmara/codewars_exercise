function flattenAndSort(array) {
    let flatten = []

    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        for (let j = 0; j < array[i].length; j++) {
            // console.log("2:", array[i][j])
            flatten.push(array[i][j])
        }
    }

    // console.log(flatten);

    for (let i = 0; i < flatten.length; i++) {
        for (let j = 0; j < flatten.length - i - 1; j++) {
            if (flatten[j] > flatten[j + 1]) {
                [flatten[j], flatten[j + 1]] = [flatten[j + 1], flatten[j]]
            }
        }
    }

    return flatten;

    //kiss return [].concat(...array).sort((a,b) => a - b);
}

console.log(flattenAndSort([])) //[]
console.log(flattenAndSort([[], []])) //[]
console.log(flattenAndSort([[], [1]])) //[1]
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))
/*
[
  1, 2,   3, 4,
  5, 6, 100
]
*/