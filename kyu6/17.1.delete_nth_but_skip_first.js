function deleteNthButSkipFirst(arr, n) {
    let result = [];
    let counter = {};

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let num = arr[i]

        if (!(num in counter)) {
            counter[num] = 0;
            result.push(num)
        } else if (counter[num] <= n) {
            result.push(num)
        }
        counter[num]++

    }

    // console.log(result)
    return result
}

console.log(deleteNthButSkipFirst([1, 2, 3, 1, 2, 1, 2], 1)); //1,2,3,1,2
console.log(deleteNthButSkipFirst([1, 2, 3, 1, 2, 1, 2], 2)); //1,2,3,1,2,1,2
