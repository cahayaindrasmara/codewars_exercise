function longestPositiveSumSubarray(arr) {
    let maxSumPos = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSumPos = 0;
        let currentLength = 0;
        console.log(arr[i])
        for (let j = i; j < arr.length; j++) {
            console.log("inner loop:", arr[j])
            currentSumPos += arr[j]
            currentLength++

            console.log("   current sum:", currentSumPos)
            if (currentSumPos > maxSumPos && currentLength > maxLength) {
                maxSumPos = currentSumPos;
                maxLength = currentLength
                console.log("   maxsum:", maxSumPos)
            }
        }
    }

    return `jumlah: ${maxSumPos} dan panjang: ${maxLength}`
}

console.log(longestPositiveSumSubarray([-2, 1, 2, -1, 2, -5, 4, 1]))
// console.log(longestPositiveSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6
