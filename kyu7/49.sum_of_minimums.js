function sumOfMinimums(arr) {
    let minArr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let min = arr[i][0]

        for (let j = 0; j < arr[i].length; j++) {
            console.log("2:", arr[i][j])

            if (arr[i][j] < min) {
                min = arr[i][j]
            }
        }
        minArr.push(min);
    }

    console.log(minArr);
    return minArr.reduce((acc, val) => acc + val, 0);

    //kiss
    //return arr.reduce((p, c) => p + Math.min(...c), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])) //9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])) //76
