function deleteUntilFrequency(arr, n) {
    let freqArr = {}

    for (let i = 0; i < arr.length; i++) {
        freqArr[arr[i]] = (freqArr[arr[i]] || 0) + 1;
    }
    console.log(freqArr)

    let i = 0;
    while (i < arr.length) {
        if (freqArr[arr[i]] > n) {
            freqArr[arr[i]]--
            console.log("freq:", freqArr[arr[i]])
            i++
            console.log("angka:", i)
        } else {
            break;
        }
        // console.log("arr loop:", arr)
    }
    // console.log(arr)
    return arr.slice(i)
}

console.log(deleteUntilFrequency([1, 1, 1, 2, 2, 3], 2))
console.log(deleteUntilFrequency([5, 5, 5, 5, 5], 2))
// console.log(deleteUntilFrequency([1, 2, 3, 4], 2))
console.log(deleteUntilFrequency([7, 7, 7, 8, 8, 7, 9], 2))
console.log(deleteUntilFrequency([1, 2, 3, 1, 2, 3, 1], 2))


