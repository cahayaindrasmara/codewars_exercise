function deleteNth(arr, n) {
    // let result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     let count = 0;

    //     for (let j = 0; j < result.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             count++
    //         }
    //     }
    //     if (count < n) {
    //         result.push(arr[i])
    //     }
    // }

    // return result;

    // menggunakan object
    let result = [];
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        if (!count[arr[i]]) {
            count[arr[i]] = 0;
        }

        if (count[arr[i]] < n) {
            result.push(arr[i])
            count[arr[i]]++
        }
    }

    return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1,1,3,3,7,2,2,2]
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1)); //[ 12, 39, 19 ]